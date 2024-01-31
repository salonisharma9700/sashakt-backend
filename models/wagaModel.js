const mongoose = require('mongoose');

const wagaScoreSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  // user : {type:mongoose.Schema.Types.ObjectId, ref : 'Signup'},
  score : { type: Number, required: true },
  level: { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const WagaScore = mongoose.model('WagaScore', wagaScoreSchema,"wagame");

module.exports = WagaScore;

// models/wagaScore.js

