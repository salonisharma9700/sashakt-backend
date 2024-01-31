// models/quizModel.js
const mongoose = require('mongoose');

const wagaquizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  level: { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const WagaQuiz = mongoose.model('WagaQuiz', wagaquizSchema, "wagaquizlevel");

module.exports = WagaQuiz;
