const router = require("express").Router();
let artM = require("../dataBase/data");


router.route("/").get((req, res) => {

  artM.artdata.find({ category: "ModernArt" })
  
    .then((ModernArt) => res.json(ModernArt))
    
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;