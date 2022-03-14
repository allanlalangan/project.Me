// REQUIRE
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  await res.status(200).json(goals)
}

// @desc Create new goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  const newGoal = await new Goal({
    user: req.user.id, // Retrieve user id from decoded token in auth middleware
    title: req.body.title,
  })

  try {
    await newGoal.save()
    await res.status(201).json(newGoal)
  } catch (error) {
    res.status(500).json({ message: 'throw setGoal error' })
    throw new Error('setGoal error')
  }
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      res.status(401)
      throw new Error('Goal user not found')
    } else if (goal.user.toString() !== user.id) {
      res.status(401)
      throw new Error('Update not authorized')
    }

    await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    await res.status(200).json({
      message: `${user.name}'s goals updated`,
      goals: await Goal.find({ user: user.id.toString() }),
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// @desc Remove goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      res.status(401)
      throw new Error('Goal user not found')
    } else if (goal.user.toString() !== user.id) {
      res.status(401)
      throw new Error('Delete not authorized')
    }

    await goal.remove()
    await res.status(200).json({
      message: `${user.name}'s goals updated`,
      deleted: goal.title,
      goals: await Goal.find({ user: user.id.toString() }),
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
