const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema(
  {
    name: { type: String, required: [true, 'Please enter a name'] },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
    },
    password: { type: String, required: [true, 'Please enter an password'] },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
