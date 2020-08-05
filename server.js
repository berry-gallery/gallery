
const mongoose = require("mongoose");
const express = require("express");

const valid = require("express-validator");
var cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
var Art = require("./dataBase/data");
var Artest = Art.Artest;
var ArtWork = Art.Art;

//const InitiateMongoServer = require("./config/db");//as tutorial do
//const config = require('../config/config');
// Initiate Mongo Server //tutorial

//InitiateMongoServer();
//routs path
//const user = require("./routes/user");

const port = process.env.PORT || 5000;

require("dotenv").config();
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "data base working" });
});

//send dtat to DB and save it .
app.post("/signUp", function (req, res) {
  //console.log(req.body);
  var artestData = Artest({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
  });
  artestData.save(function (err) {
    if (err) {
     // console.log(err);
    } else console.log("saved");

    //console.log("saved")
    // saved!
  });
});



app.get("/data", (req, res) => {
  ArtWork.find({}, function (err, data) {
    console.log(data.title, "data");
    
    if (err) {
            res.json(err);
          } else {
            //console.log(req);
            console.log(data)
            res.json(data);
          }
  });
});
// .get('./dataBase/data') function (req, res) {
//   data.find({}, function (err, data {
//     if (err) {
//       res.json(err);
//     } else {
//       console.log(req);
//       res.json(data);
//     }
//   });

// app.get("/data", function(req, res){
//  Art.findall({}, function(err){
//       if(err){
//           console.log("ERROR!");
//       } else {
//           var categories = ['Fine Art', 'Sculpting']
//           res.render("data", {categories: categories});
//       }
//   });
// });


//PUT request
app.put("/Profile", function(req, res) {
  //console.log(req.body);
  Artest.findOneAndUpdate({name: req.body.name}, {$set:req.body}, {new: true}, function(err, data) {
      if (err) {
          res.status(500).send({error: "Could not modify hasp info..."});
      } else {           
         //console.log(hasps);
         res.status(200).send(data);
      }
  }); 
  });


  ///
app.get("/data", (req, res) => {
  res.json({ message: "data base working" });
});
//connect to MongoDB
const mongoURI =
  "mongodb+srv://berry:berry123@gallerycluster.9kcs4.mongodb.net/gallerycluster?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
