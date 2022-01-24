const express = require('express'); //import express
// 1.
const router  = express.Router(); 
// 2.
const mv_listaprecios_update = require('../controllers/mv_listapreciosController_update'); 
// 3.
router.post('/mv_listapreciosController_update', mv_listapreciosController_update.updatelistaprecios);
// 4. 
module.exports = router; // export to use in server.js