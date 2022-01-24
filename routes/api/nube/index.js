const router = require("express").Router();

const agentesRoutes = require("./agentes");
const UpdateProductRoutes = require("./productos_update_woo");
const UpdateOrderRoutes = require("./ordenes_update_woo");




router.use("/agentes", agentesRoutes); 
router.use("/updateProductNubeWoo", UpdateProductRoutes); 
router.use("/updateOrderNubeWoo", UpdateOrderRoutes); 


module.exports = router;
 