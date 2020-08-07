const router = require("express").Router();
let artC = require("../dataBase/data");


router.route("/ceramic").get((req, res) => {

  artC.Art.find({ category: "ceramic" })
  
    .then((Ceramic) => res.json(Ceramic))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;