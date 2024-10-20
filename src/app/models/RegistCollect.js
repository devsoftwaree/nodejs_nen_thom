const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegistCollect = new Schema({
  index: ObjectId,
  name: String,
  phone: String,
  email: String,
  address: String,
  productSelected: String,
  productQuantity: Number,
  createAt: {type: Date, default: Date.now},
});



module.exports = mongoose.model('RegistCollect', RegistCollect)


