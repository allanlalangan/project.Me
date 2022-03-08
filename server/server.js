const express = require('express')

const app = express()

app.use(express.json())

const PORT = 55555
app.listen(PORT, () => {
  console.log('server listening')
})
