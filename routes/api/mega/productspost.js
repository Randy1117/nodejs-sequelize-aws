const router = require("express").Router();
const mv_productos_postController = require('../../../controllers/controllers_post/mv_productos_postController');


router.route("/")
  .post(mv_productos_postController.Postproductos);

module.exports = router; // export to use in server.js