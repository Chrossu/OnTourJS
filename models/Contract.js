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
  description: {
    type: String,
    required: true
  },
  insurance: {
    type: boolean,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  currentAmount: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('contract', ContractSchema);