// const mongoose = require('mongoose');

// const signupSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true, index: true },
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   // email: { type: String, required: true,unique: true },
  

// });

// const Signup = mongoose.model('Signup', signupSchema, 'Signup');

// module.exports = Signup;

const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  lastPlayTimestamp: { type: Date, default: Date.now }
});

const Signup = mongoose.model('Signup', signupSchema, 'Signup');

module.exports = Signup;
