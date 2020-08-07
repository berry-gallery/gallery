const router = require("express").Router();
let artS = require("../dataBase/data");


router.route("/").get((req, res) => {

  artS.arts.find({ category: "Sculpture" })
  
    .then((Sculpture) => res.json(Sculpture))
    
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;