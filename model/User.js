const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true },  // Unique user ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },          // Hashed password
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);