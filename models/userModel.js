const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
