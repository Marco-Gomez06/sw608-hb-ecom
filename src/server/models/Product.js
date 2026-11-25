const { Schema, model } = require('mongoose');
module.exports = model('Product', new Schema({
  slug: { type: String, unique: true }, name: String, description: String,
  price: Number, currency: { type: String, default: 'PEN' }, stock: Number,
  category: String, rating: Number,
  reviews: [{ author: String, rating: Number, comment: String, createdAt: Date }],
}));
