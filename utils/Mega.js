const express = require('express'); //import express
// 1.
const router  = express.Router(); 
// 2.
const mv_listaprecios = require('../controllers/mv_listapreciosController'); 
// 3.
router.post('/mv_listapreciosController', mv_listapreciosController.newlistaprecios);
// 4. 
module.exports = router; // export to use in server.js