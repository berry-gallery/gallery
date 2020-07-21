const mongoose = require("mongoose");
const express = require("express");
const user = require("./routes/user");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");//as tutorial do 

// Initiate Mongo Server //tutorial

//InitiateMongoServer();

var app = express();

const port = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(bodyParser.json());

app.get("/", (req,res) =>{
  res.json({ message :"API Working"});
})

app.use("/user", user);



const mongoURI = process.env.ATLAS_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
