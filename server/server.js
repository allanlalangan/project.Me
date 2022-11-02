const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');

// CONNECT TO DATABASE
connectDB();

const app = express();
app.use(cors());
const port = process.env.PORT;

// PARSE BODY MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/api/goals', require('./routes/goals'));
app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

// SERVER START
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
