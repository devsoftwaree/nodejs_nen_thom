const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  index: ObjectId,
  username: {
    type: String, // Kiểu dữ liệu là chuỗi
    required: true, // Bắt buộc phải có
    unique: true // Phải là duy nhất
  },
  email: String,
  password: {
    type: String,
    required: true,
  },
  
  createAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('User', User)

