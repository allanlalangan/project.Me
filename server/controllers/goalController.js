// REQUIRE
const Goal = require('../models/goalModel')

const getGoals = async (req, res) => {
  const goals = await Goal.find()
  await res.status(200).json(goals)
}

const setGoal = async (req, res) => {
  const newGoal = await new Goal(req.body)
  await newGoal.save()
  await res
    .status(200)
    .json({ message: `'${newGoal.title}' added as a new goal` })
}

const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  await res.status(200).json(updatedGoal)
}

const deleteGoal = async (req, res) => {
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
