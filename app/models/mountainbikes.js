const mongoose = require("mongoose");
const { Schema } = mongoose;

const MountainbikeSchema = new Schema({
    itembrand: {type: String, lowercase: true, required: true, unique: true},
    itemmodel: {type: String, lowercase: true, required: true},
    itemprice: {type: Number, required: true}
});

module.exports = mongoose.model('Mountainbikes', MountainbikeSchema);