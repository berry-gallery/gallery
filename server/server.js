const mongoose = require("mongoose");
const express = require("express");
var app = express();
var port = process.env.PORT || 3000;

require("dotenv").config();

const mongoURI = process.env.ATLAS_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
