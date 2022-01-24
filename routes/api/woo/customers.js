const router = require("express").Router();
const customersController = require ("../../../splitter/Customers/Customers")

//establecer si es mas conveniente un endpoint por caso o todos los casos entren por el mismo endpoint
router.route("/")
  .get(customersController.AllCustomersController);

module.exports = router;