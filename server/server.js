const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');

// SERVER START
const app = express();
const port = process.env.PORT;
// app.listen(port || 5000, () => {
//   console.log(`server on port ${port}`);
// });
app.use(cors());
// PARSE BODY MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONNECT TO DATABASE
connectDB();

// ROUTES
app.use('/api/goals', require('./routes/goalsRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/tasks', require('./routes/tasksRoutes'));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});
