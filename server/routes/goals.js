const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalsController')
const { protectRoute } = require('../middleware/userAuth')

router.get('/', protectRoute, getGoals)

router.post('/', protectRoute, setGoal)

router.put('/:id', protectRoute, updateGoal)

router.delete('/:id', protectRoute, deleteGoal)

module.exports = router
