const router = require("express").Router();
const tasasController = require('../../../controllers/mv_tasasController');


router.route("/")
  .post(tasasController.newtasas);


module.exports = router; // export to use in server.js