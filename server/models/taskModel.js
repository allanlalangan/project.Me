const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: [true, 'Please name your task'] },
    goal: { type: Schema.Types.ObjectId, ref: 'Goal' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Task', taskSchema)
