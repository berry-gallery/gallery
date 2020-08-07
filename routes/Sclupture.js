const router = require("express").Router();
let artS = require("../dataBase/data");


router.route("/").get((req, res) => {

  artS.artdata.find({ category: "Sclupture" })
  
    .then((Sclupture) => res.json(Sclupture))
    
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;