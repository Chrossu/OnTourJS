const mongoose = require('mongoose');

const ContractSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true,
    unique: true
  },
  currentAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('user', ContractSchema);