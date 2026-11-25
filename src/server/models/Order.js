const { Schema, model } = require('mongoose');
module.exports = model('Order', new Schema({
  number: String,
  items: [{ productId: Schema.Types.ObjectId, name: String, qty: Number, price: Number }],
  total: Number, customer: { fullName: String, address: String },
  createdAt: { type: Date, default: Date.now },
}));
