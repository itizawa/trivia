const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const TriviaTagRelationSchema = new mongoose.Schema({
  trivia: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'trivia',
    index: true,
  },
  tag: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'tag',
    index: true,
  },
});

module.exports = mongoose.models.TriviaTagRelation || mongoose.model('TriviaTagRelation', TriviaTagRelationSchema);
