const mongoose = require('mongoose');

const rtdQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const RtdQuiz = mongoose.model('RtdQuiz', rtdQuizSchema,"Right_to_Development");

module.exports = RtdQuiz;
