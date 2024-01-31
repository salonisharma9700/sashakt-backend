const mongoose = require('mongoose');

const radQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const RadQuiz = mongoose.model('RadQuiz', radQuizSchema,"Right_against_Discrimination");

module.exports = RadQuiz;
