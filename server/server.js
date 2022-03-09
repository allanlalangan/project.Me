const express = require('express')
const dotenv = require('dotenv').config()
const { connectDB } = require('./config/db')

// SERVER START
const app = express()
const port = process.env.PORT
app.listen(port, () => {
  console.log(`server on port ${port}`)
})

// CONNECT TO DATABASE
connectDB()

// PARSE BODY MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})
