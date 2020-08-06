const router = require("express").Router();
let artP = require("../dataBase/data");


router.route("/").get((req, res) => {

  artP.artdata.find({ category: "Painting" })
  
    .then((Painting) => res.json(Painting))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;