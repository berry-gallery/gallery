

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtestSchema = new Schema({
  name: { type: String, required: [true, "can't be blank"] },
  email: { type: String, required: [true, "can't be blank"], unique: true },
  password: { type: String, required: [true, "can't be blank"] },
  mobile: { type: Number, required: true },
  location: { type: String, required: false },
  img: { type: String, required: false },
  id:{type:Number},
});

const ArtWorkSchema = new Schema({
  artID:{type:Number},
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category: { type: String },
});

var Artest = mongoose.model("Artest", ArtestSchema);
var Art = mongoose.model("Art", ArtWorkSchema);

module.exports = {Artest:Artest,
   Art:Art};