const mongoose = require("../config/db");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;