const findOneOrCreate = require('mongoose-findoneorcreate');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      maxlength: [40, 'name cannot be more than 40 chars'],
    },
  },
  { timestamps: true },
);

TagSchema.plugin(mongoosePaginate);
TagSchema.plugin(findOneOrCreate);

module.exports = mongoose.models.Tag || mongoose.model('Tag', TagSchema);
