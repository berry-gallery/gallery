const mongoose = require("mongoose");
const express = require("express");
const user = require("./routes/user");
//import React from 'react';
/*import ReactDOM from 'react-dom';
import App from './App';*/

//ReactDOM.render(<App />, document.getElementById("app"));

const bodyParser = require("body-parser");
//const InitiateMongoServer = require("./config/db");//as tutorial do
//const config = require('../config/config');
// Initiate Mongo Server //tutorial

//InitiateMongoServer();

var app = express();

const port = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "data base working" });
});

app.post("/signUp", function (req, res) {
  var signupData = req.body;
  console.log("req test",req.body)
  db.collection.insertOne(signupData, (err, data) => {
    console.log("data test",data)
        res.send(data);
  });
});

app.use("/user", user);

const mongoURI =
  "mongodb+srv://berry:berry123@gallerycluster.9kcs4.mongodb.net/gallerycluster?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
