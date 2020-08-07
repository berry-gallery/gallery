const router = require("express").Router();
let artCal = require("../dataBase/data");


router.route("/").get((req, res) => {

  artCal.artdata.find({ category: "calligraphy" })
  
    .then((calligraphy) => res.json(calligraphy))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;