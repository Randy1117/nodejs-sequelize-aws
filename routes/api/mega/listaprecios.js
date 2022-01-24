const router = require("express").Router();
const listapreciosController = require("../../../splitter/LP/Listaprecio");


router.route("/")
  .get(listapreciosController.newlistaprecios);


module.exports = router; // export to use in server.js