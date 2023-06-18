const express = require("express");
const router = express.Router();
const cityModel = require("../model/cityModel");
// prefix   cities

// cities/all
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

// cities/test
router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

module.exports = router;
