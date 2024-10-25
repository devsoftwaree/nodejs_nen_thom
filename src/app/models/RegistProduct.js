const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegistProduct = new Schema({
  index: ObjectId,
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  productSelected: { type: String, required: true },
  productQuantity: { type: Number, required: true, min: [1, 'Quantity must be greater than 0'] },
  createAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('RegistProduct', RegistProduct)


