/*const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb-connection-string",
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to gallery Database");
  }
);*/
///the same but by promises..
/*MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: [true, "can't be blank"] },
  email: { type: String, required: [true, "can't be blank"], unique: true },
  password: { type: String, required: [true, "can't be blank"] },
  mobile: { type: Number, required: true },
  location: { type: String, required: false },
  img: { type: String, required: false },
});

const ArtWorkSchema = new Schema({
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  //  categ:
});

var User = mongoose.model("users", UserSchema);
var Art = mongoose.model("users", ArtWorkSchema);

module.exports = User;
module.exports = Art;