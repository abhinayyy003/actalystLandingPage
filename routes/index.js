var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/testpage", function (req, res, next) {
  res.render("testpage");
});

module.exports = router;
