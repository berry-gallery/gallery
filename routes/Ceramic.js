const router = require("express").Router();
let artC = require("../dataBase/data");


router.route("/").get((req, res) => {

  artC.artdata.find({ category: "Ceramic" })
  
    .then((Ceramic) => res.json(Ceramic))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;