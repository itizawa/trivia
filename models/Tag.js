const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: [40, 'name cannot be more than 40 chars'],
    },
  },
  { timestamps: true },
);

TagSchema.plugin(mongoosePaginate);

module.exports = mongoose.models.Tag || mongoose.model('Tag', TagSchema);
