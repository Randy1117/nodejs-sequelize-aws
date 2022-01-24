const router = require("express").Router();
const ordersController = require ("../../../splitter/Orders/Orders")

//establecer si es mas conveniente un endpoint por caso o todos los casos entren por el mismo endpoint
router.route("/")
  .get(ordersController.AllOrdersController);

module.exports = router;