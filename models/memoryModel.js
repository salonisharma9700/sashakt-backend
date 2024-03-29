const mongoose = require('mongoose');

const memoryScoreSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  moves : { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const MemoryScore = mongoose.model('MemoryScore', memoryScoreSchema,"memorygame");

module.exports = MemoryScore;
