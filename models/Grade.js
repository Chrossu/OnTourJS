const mongoose = require('mongoose');

const GradeSchema = mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  schoolName: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  currentAmount: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('grade', GradeSchema);