const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protectRoute = async (req, res, next) => {
  let token;

  // Check to see if request headers have authorization
  // Check if there is token 'Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Retrieves logged in user id by decoding jwt from req.headers
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET);
      // !! REMOVE PASSWORD FROM REQUEST !!
      req.user = await User.findById(decoded.id).select('-password');

      // the req object is passed to the route or next middleware
      next();
    } catch (error) {
      // console.log(error)
      res.status(401).json({ message: 'Not Authorized' });
      throw new Error('Not Authorized');
    }
  } else if (!token) {
    res.status(401).json({ message: 'No Token' });
    throw new Error('No Token');
  }
};

module.exports = { protectRoute };
