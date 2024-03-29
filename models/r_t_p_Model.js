const mongoose = require('mongoose');

const rtpQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const RtpQuiz = mongoose.model('RtpQuiz', rtpQuizSchema,"Right_to_Protection");

module.exports = RtpQuiz;
