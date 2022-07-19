const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    complete: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
