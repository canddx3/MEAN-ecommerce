const mongoose = require("mongoose");
var { Schema } = mongoose;
var bcrypt = require("bcrypt-nodejs");

var UserSchema = new Schema({
  firstname: { type: String, lowercase: true, required: true },
  lastname: { type: String, lowercase: true, required: true },
  email: { type: String, lowercase: true, required: true, unique: true },
  address: { type: String, lowercase: true, required: true },
  phone: { type: String, lowercase: true, required: true },
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  var user = this;
  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);
