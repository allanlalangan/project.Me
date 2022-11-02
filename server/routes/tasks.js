const express = require('express')
const router = express.Router()
const { protectRoute } = require('../middleware/userAuth')

// request callback functions
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController')

///

router.get('/', protectRoute, getTasks)

router.post('/', protectRoute, createTask)

router.put('/:id', protectRoute, updateTask)

router.delete('/:id', protectRoute, deleteTask)

module.exports = router
