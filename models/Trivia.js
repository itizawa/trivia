const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = require('mongoose');

const TriviaSchema = new mongoose.Schema(
  {
    forwardText: {
      type: String,
      required: [true, 'Please add a forward text'],
      trim: true,
      maxlength: [40, 'Forward text cannot be more than 40 chars'],
    },
    backwardText: {
      type: String,
      required: [true, 'Please add a backward text'],
      maxlength: [40, 'Backward text cannot be more than 40 chars'],
    },
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
      index: true,
    },
    acquisitionCount: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  { timestamps: true },
);

TriviaSchema.plugin(mongoosePaginate);

module.exports = mongoose.models.Trivia || mongoose.model('Trivia', TriviaSchema);
