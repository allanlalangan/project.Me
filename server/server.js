const express = require('express')
const dotenv = require('dotenv').config()
const { connectDB } = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

// ROUTES
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})

app.listen(port, () => {
  console.log(`server on port ${port}`)
})
