const mongoose = require('mongoose');

const SummarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [40, 'Title cannot be more than 40 chars'],
    },
    text: {
      type: String,
      required: [true, 'Please add a title'],
      maxlength: [1000, 'Description cannot be more than 100 chars'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Summary || mongoose.model('Summary', SummarySchema);
