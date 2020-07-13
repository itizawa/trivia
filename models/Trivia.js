const mongoose = require('mongoose');

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
    userName: {
      type: String,
      required: [true, 'Please add a title'],
      maxlength: [40, 'UserName text cannot be more than 40 chars'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Trivia || mongoose.model('Trivia', TriviaSchema);
