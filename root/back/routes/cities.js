const express = require("express");
const router = express.Router();

// prefix   cities

// cities/test
router.get("/test", (req, res, next) => {
  res.send({ msg: "Cities test route." });
});

module.exports = router;
