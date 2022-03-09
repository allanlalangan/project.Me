// REQUIRE
const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  const goals = await Goal.find()
  await res.status(200).json(goals)
}

// @desc Create new goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  const newGoal = await new Goal(req.body)
  await newGoal.save()
  await res
    .status(200)
    .json({ message: `'${newGoal.title}' added as a new goal` })
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  // NEEDS ERROR HANDLER
  const goal = await Goal.findById(req.params.id)
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  await res.status(200).json(updatedGoal)
}

// @desc Remove goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  // NEEDS ERROR HANDLER
  const goal = await Goal.findById(req.params.id)

  await goal.remove()
  await res.status(200).json({ message: `Deleted Goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
