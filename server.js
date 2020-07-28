const mongoose = require("mongoose");
const express = require("express");

const valid = require("express-validator");
var cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
var item = require("../dataBase/data")
 var Artest = item.Artest ;

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

app.post("/signUp", function (req, res) {
  var artestData = new Artest({ 
    name : req.body.name ,
    email:req.body.email,
    password:req.body.password,
    mobile:req.body.mobile
  })

  console.log("req test", req.body.name);
  db.collection.insertOne(artestData, (err, data) => {
    if(err){
      console.log(err)
      console.log("hi")
    }
    console.log("data test", data);
    res.save()
    res.json(data);
  });
});

app.get("/data", function(req, res){
 Art.findall({}, function(err, arts){
      if(err){
          console.log("ERROR!");
      } else {
          var categories = ['Fine Art', 'Sculpting']
          res.render("data", {categories: categories});
      }
  });
});


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
