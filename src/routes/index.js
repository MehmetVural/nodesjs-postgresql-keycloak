
const express = require("express");
const router = express.Router();

//const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get("/", (req, res, next) => {
  return res.status(200).send({
    message: "The API is UP && RUNNING! v.1"
  });
}); 

var Keycloak = require('keycloak-connect');
var session = require('express-session');
var memoryStore = new session.MemoryStore();

router.use(session({
    secret: '8d67fc9c-ddde-4b49-a78d-466279a10fdb',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

var keycloak = new Keycloak({
    store: memoryStore
});

//// END KEYCLOAK

router.use("/home",require("./home"));


//keycloak.protect(),  keycloak.protect('realm:admin'),
router.use("/news", keycloak.protect(), require("./news"));

module.exports = router;