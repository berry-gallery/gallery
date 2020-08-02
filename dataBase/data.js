const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtestSchema = new Schema({
  name: { type: String, required: [true, "can't be blank"] },
  email: { type: String, required: [true, "can't be blank"], unique: true },
  password: { type: String, required: [true, "can't be blank"] },
  mobile: { type: Number, required: true },
  location: { type: String, required: false },
  img: { type: String, required: false },
  category :{ type: String, required: false },
  
});

//module.exports = mongoose.model('category', ArtWorkSchema);

//{type: Schema.Types.ObjectId, ref: 'Ingredient'}

const ArtWorkSchema = new Schema({
  artID: { type: Number },
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category :{ type: String, required: false },

  category: [{ type: Schema.Types.ObjectId, ref: "category" }],
});

var Artest = mongoose.model("Artest", ArtestSchema);
var Art = mongoose.model("Art", ArtWorkSchema);
//module.exports = mongoose.model('Recipe', RecipeSchema);
module.exports = { Artest: Artest, Art: Art };



// //To Save://///

// var r = new Recipe();

// r.name = 'Blah';
// r.ingredients.push('mongo id of ingredient');

// r.save()