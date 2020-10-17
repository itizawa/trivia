const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

TriviaTagRelationSchema.plugin(mongoosePaginate);

module.exports = mongoose.models.TriviaTagRelation || mongoose.model('TriviaTagRelation', TriviaTagRelationSchema);
