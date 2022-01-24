const router = require("express").Router();
const productsController = require ("../../../splitter/Products/Products")

router.route("/")
  .get(productsController.AllProductsController);
 
module.exports = router;