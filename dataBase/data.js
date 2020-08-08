const mongoose = require("mongoose");
// const arts = require("./artData.json");
// const artest = require("./ArtestData.json");



const Schema = mongoose.Schema;

const ArtestSchema = new Schema({
  name: { type: String, required: [true, "can't be blank"] },
  email: { type: String, required: [true, "can't be blank"], unique: true },
  password: { type: String, required: [true, "can't be blank"] },
  mobile: { type: Number, required: true },
  location: { type: String, required: false },
  img: { type: String, required: false },
  category :{ type: String, required: false }
  
});

//module.exports = mongoose.model('category', ArtWorkSchema);

//{type: Schema.Types.ObjectId, ref: 'Ingredient'}

const ArtWorkSchema = new Schema({
  
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category :{ type: String, required: false }

  //category: [{ type: Schema.Types.ObjectId, ref: "category" }],
});
 




// //To Save://///
// let save = (users) => {};

// //Function to populate category  from JSON file
// let saveSt = () => {
//   for (var i = 0; i < arts.length; i++) {
//     var partOfarts = new Stuff({
//       category: arts[i].category,
//       title: arts[i].title,
//       img: arts[i].img,
//       price: arts[i].price,
      
//     });
//     partOfarts.save();
//   }
// };

// var r = new Recipe();

// r.name = 'Blah';
// r.ingredients.push('mongo id of ingredient');

// r.save()

var Artest = mongoose.model("Artest", ArtestSchema,"artests");
var Art = mongoose.model("Art", ArtWorkSchema,"arts");

//module.exports.Artest =  Artest ;
module.exports = { Artest :Artest , Art:Art };



// module.exports.save = save;
// module.exports.saveSt = saveSt;