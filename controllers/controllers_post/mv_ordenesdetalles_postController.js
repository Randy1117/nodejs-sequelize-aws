const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let ord_idorden = objetoJson.or_idCLiente;
            let ord_idEmpresa = objetoJson.or_ordenOrigen;
            let ord_idCLiente = objetoJson.or_codMon;
            let ord_numItem = objetoJson.or_subtotal;
            let ord_idProducto = objetoJson.or_descTotal;
            let ord_idUnidad = objetoJson.or_descImp;
            let ord_cantProducto = objetoJson.ord_cantProducto;
            let ord_cantDIsp = objetoJson.ord_cantDIsp;
            let ord_idTes = objetoJson.ord_idTes;
            let ord_precio = objetoJson.ord_precio;
            let ord_subtotal = objetoJson.ord_subtotal;
            let ord_impSubtotal = objetoJson.ord_impSubtotal;
            let ord_precio_unitario = objetoJson.ord_precio_unitario;
            let ord_desc = objetoJson.ord_desc;
            let ord_subdesc = objetoJson.ord_subdesc;
            let ord_numPV = objetoJson.ord_numPV;
           
          

            let parametros = 
                {
                    "ord_idorden" : or_idCLiente,
                    "ord_idEmpresa": or_ordenOrigen,
                    "ord_idCLiente" : or_codMon,
                    "ord_numItem" : or_codMon ,
                    "ord_idProducto" : or_subtotal,   
                    "ord_idUnidad" : or_descTotal,
                    "ord_cantProducto" : or_descImp,
                    "ord_cantDIsp" : or_envioTotal,
                    "ord_idTes" : or_envImp,
                    "ord_precio" : or_totalImp,
                    "ord_subtotal" : or_totalFinal,
                    "ord_impSubtotal" : or_agenteID,
                    "ord_precio_unitario" : or_dirEnvioID,
                    "ord_desc" : or_dirFactID,
                    "ord_subdesc" : or_idCondPago,    
                    "ord_numPV" : or_idListaP,
                };

                dba.mv_ordenesdetalles.create(parametros)
        
      
    for(let i = 0; i < items.length; i++) 
    {
     let objdetalles = items[i];
 
     pr_sku = objdetalles.pr_sku;
     pr_ClaveProdServ = objdetalles.pr_ClaveProdServ;
     pr_ClaveUnidad = objdetalles.pr_ClaveUnidad;
   
         let detall = { 
         
            pr_ClaveProdServ : objdetalles.pr_ClaveProdServ,
            pr_ClaveUnidad : objdetalles.pr_ClaveUnidad,
                  
         };
 
         let condicion = {
             where: {
                pr_sku,  
             },
         };             
         let opciones = { multi: true };
 
         dba.mv_ordenesdetalles.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
