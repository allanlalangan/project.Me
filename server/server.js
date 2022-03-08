const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`server on port ${port}`)
})

app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})
