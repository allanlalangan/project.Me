// REQUIRE
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  await res.status(200).json(goals);
};

// @desc Create new goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  const newGoal = await new Goal({
    user: req.user.id, // Retrieve user id from decoded token in auth middleware
    title: req.body.title,
  });

  try {
    await newGoal.save();
    await res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ message: 'throw setGoal error' });
    throw new Error('setGoal error');
  }
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  try {
    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    } else if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Goal update not authorized');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json({
      message: `${req.user.name}'s goal updated`,
      goals,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  try {
    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    } else if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Goal delete not authorized');
    }

    await goal.remove();
    res.status(200).json({
      message: `goal deleted`,
      deletedGoalID: req.params.id,
      goals: await Goal.find({ user: req.user.id }),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
