const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const TriviaAdmirationRelation = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  trivia: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'trivia',
  },
  count: {
    type: Number,
  },
});

module.exports = mongoose.models.TriviaAdmirationRelation || mongoose.model('TriviaAdmirationRelation', TriviaAdmirationRelation);
