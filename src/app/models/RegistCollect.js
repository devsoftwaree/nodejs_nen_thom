const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegistCollect = new Schema({
  index: ObjectId,
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  district: { type: String, required: true },
  province: { type: String, required: true },
  email:{ type: String, required: true },
  productSelected: { type: String, required: true },
  productQuantity: { type: Number, required: true, min: [1, 'Quantity must be greater than 0'] },
  createAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('RegistCollect', RegistCollect)


