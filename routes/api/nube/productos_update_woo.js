const router = require("express").Router();
const UpdateController = require ("../../../localCRqsts/products/productos")


router.route("/")
  .get(UpdateController.ProductoNubeWoo);

module.exports = router;
 