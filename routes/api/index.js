const router = require("express").Router();
//const nubeRoutes = require("./nube");

const wooRoutes = require("./woo");
const megaRoutes = require("./mega");
const nubeRoutes = require("./nube");

//router.use("/nube", nubeRoutes); //operaciones nativas

router.use("/woo", wooRoutes); //operaciones relacionadas con woocommerce
router.use("/mega", megaRoutes); //operaciones relacionadas con megaservicio
router.use("/nube", nubeRoutes); //operaciones relacionadas con nube


module.exports = router;