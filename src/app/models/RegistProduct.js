const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegistProduct = new Schema({
  index: ObjectId,
  name: String,
  phone: String,
  address: String,
  productSelected: String,
  productQuantity: Number,
  createAt: {type: Date, default: Date.now},
});



module.exports = mongoose.model('RegistProduct', RegistProduct)


