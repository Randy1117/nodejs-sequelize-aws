const router = require("express").Router();
const listapreciosUpdateController = require('../../../controllers/mv_listapreciosControllerUpdate');


router.route("/")
  .post(listapreciosUpdateController.updatelistaprecios);


module.exports = router; // export to use in server.js