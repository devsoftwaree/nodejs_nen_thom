const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contact = new Schema({
  index: ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email:{ type: String, required: true },
  createAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('contact', contact)


