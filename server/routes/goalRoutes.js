const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')
const { protectRoute } = require('../middleware/userAuth')

router.get('/', protectRoute, getGoals)

router.post('/', protectRoute, setGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router
