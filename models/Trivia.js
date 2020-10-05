const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = require('mongoose');

const TriviaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title text'],
      trim: true,
      maxlength: [100, 'Title text cannot be more than 100 chars'],
    },
    bodyText: {
      type: String,
      maxlength: [5000, 'Body text cannot be more than 5000 chars'],
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
    genre: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

TriviaSchema.plugin(mongoosePaginate);

module.exports = mongoose.models.Trivia || mongoose.model('Trivia', TriviaSchema);
