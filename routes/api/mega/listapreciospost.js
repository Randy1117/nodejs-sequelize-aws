const router = require("express").Router();
const listapreciosController = require('../../../controllers/mv_listapreciosController');


router.route("/")
  .post(listapreciosController.newlistaprecios);


module.exports = router; // export to use in server.js