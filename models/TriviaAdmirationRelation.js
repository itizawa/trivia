const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const TriviaAdmirationRelation = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
    index: true,
  },
  trivia: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'trivia',
    index: true,
  },
  count: {
    type: Number,
    index: true,
  },
});

module.exports = mongoose.models.TriviaAdmirationRelation || mongoose.model('TriviaAdmirationRelation', TriviaAdmirationRelation);
