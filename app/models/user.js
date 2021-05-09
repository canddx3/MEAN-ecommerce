const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  firstname: { type: String, lowercase: true, required: true },
  lastname: { type: String, lowercase: true, required: true },
  email: { type: String, lowercase: true, required: true, unique: true },
  address: { type: String, lowercase: true, required: true },
  phone: { type: String, lowercase: true, required: true },
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// compares user password with user provided password
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", UserSchema);
