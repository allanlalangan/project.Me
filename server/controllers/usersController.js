const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '30d' })
}

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  // Check if user already exists
  const userExists = await User.findOne({ email })

  try {
    if (!name || !email || !password) {
      await res.status(400).json({ message: 'Please complete all fields' })
    } else if (userExists) {
      await res.status(400).json({ message: 'User already exists' })
    } else {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      // Create new User
      const newUser = await new User({
        name,
        email,
        password: hashedPassword,
      })

      await res.status(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        token: generateToken(newUser._id),
      })
      await newUser.save()
    }
  } catch (error) {
    res.status(500).send('error occured')
  }
}

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body
  // Check if user exists
  const user = await User.findOne({ email })

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// @desc Get current user data
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
  res.json({ message: 'Showing user data' })
}

module.exports = { registerUser, loginUser, getMe }
