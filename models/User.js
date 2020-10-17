const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
