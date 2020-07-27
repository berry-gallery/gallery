const express = require("express");
const { check, validationResult} = require("express-validator/check");

const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//const User = require("../routes//user.js");//what should i put here instead of /models /user....

users.use(cors());
require("dotenv").config();


users.post("/signUp", (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    location: req.body.location,
    img: req.body.img,
  };

  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash;
        User.create(userData)
          .then((user) => {
            res.json({ status: user.email + "SignUp" });
          })
          .catch((err) => {
            res.send("error:", err);
          });
      });
    } else res.json();
  });
});

users.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            username,
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                username,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = user;