const router = require("express").Router();
const UpdateController = require ("../../../localCRqsts/orders/ordenes")


router.route("/")
  .get(UpdateController.OrdenesNubeWoo);

module.exports = router;
 