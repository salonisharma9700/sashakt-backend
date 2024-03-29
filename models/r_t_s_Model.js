const mongoose = require('mongoose');

const rtsQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const RtsQuiz = mongoose.model('RtsQuiz', rtsQuizSchema,"Right_to_Survive");

module.exports = RtsQuiz;
