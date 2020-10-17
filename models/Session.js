const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SessionSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

module.exports = mongoose.models.Session || mongoose.model('Session', SessionSchema);
