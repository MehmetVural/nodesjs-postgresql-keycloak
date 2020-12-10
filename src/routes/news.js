const express = require("express");
const router = express.Router();

const NewsController = require("../controllers/news-controller");

//router.get("/nearby", NewsController.getNearbyRestaurants);
//router.post("/batch", NewsController.createInBatch);
//router.get("/filter", NewsController.filter);
router.get("/", NewsController.readAll);
//router.post("/", NewsController.create);
//router.delete("/:id", NewsController.delete);
//router.get("/:id", NewsController.readById);
//router.patch("/:id", NewsController.update);

module.exports = router;
