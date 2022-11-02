const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '30d' });
};

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    if (!name || !email || !password) {
      res.status(400).json({ message: 'Please complete all fields' });
    } else {
      const user = await User.registerUser(name, email, password);

      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).send('error occured');
  }
};

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const user = await User.findOne({ email });

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc Get current user data
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
  res.json({ message: 'Showing user data' });
};

module.exports = { registerUser, loginUser, getMe };
