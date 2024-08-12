const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jewellerySchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  imageUrls: [String],
}, {
  timestamps: true
});

module.exports = jewellerySchema;
