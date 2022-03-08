const getGoals = async (req, res) => {
  await res.status(200).json({ message: 'Get Goals' })
}

const setGoal = async (req, res) => {
  await res.status(200).json({ message: 'Set Goal' })
}

const updateGoal = async (req, res) => {
  await res.status(200).json({ message: `Update Goal ${req.params.id}` })
}

const deleteGoal = async (req, res) => {
  await res.status(200).json({ message: `Delete Goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
