const router = require("express").Router();

const listaPrecios = require("./listaprecios");
const listaPreciosPost = require("./listapreciospost");
const listaPreciosPostUpdate = require("./listapreciospostUpdate");
const ProductosPost = require("./productspost");
const tasasPost = require("./tasas");

router.use("/listaprecios", listaPrecios); 
router.use("/listapreciospost", listaPreciosPost); 
router.use("/listapreciospostUpdate", listaPreciosPostUpdate); 
router.use("/productspost", ProductosPost);
router.use("/tasas", tasasPost);  

module.exports = router;