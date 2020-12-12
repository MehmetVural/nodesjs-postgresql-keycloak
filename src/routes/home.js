const express = require("express");
const router = express.Router();

//const HomeController = require("../controllers/home-controller");

//router.get("/", HomeController.getHomeData);

router.get('/', function (req, res) {
    res.send("This is public Home");
  });

module.exports = router;
