const router = require("express").Router();

const orderRoutes = require("./orders");
const customerRoutes = require("./customers");
const productRoutes = require("./products");



router.use("/order", orderRoutes); //metodos relaciondos con ordenes - una orden o multiples ordenes CRUD
router.use("/customers", customerRoutes); //metodos relaciondos con ordenes - una orden o multiples ordenes CRUD
router.use("/products", productRoutes); //metodos relaciondos con ordenes - una orden o multiples ordenes CRUD




module.exports = router;


