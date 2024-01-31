// models/quizModel.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  level: { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const Quiz = mongoose.model('Quiz', quizSchema, "quizlevel");

module.exports = Quiz;
