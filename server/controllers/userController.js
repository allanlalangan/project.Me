const User = require('../models/userModel')

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  res.json({ message: 'New user registered' })
}

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  res.json({ message: 'User login' })
}

// @desc Get current user data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: 'Showing user data' })
}

module.exports = { registerUser, loginUser, getMe }
