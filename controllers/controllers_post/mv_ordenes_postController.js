const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let or_idCLiente = objetoJson.or_idCLiente;
            let or_ordenOrigen = objetoJson.or_ordenOrigen;
            let or_codMon = objetoJson.or_codMon;
            let or_subtotal = objetoJson.or_subtotal;
            let or_descTotal = objetoJson.or_descTotal;
            let or_descImp = objetoJson.or_descImp;
            let or_envioTotal = objetoJson.or_envioTotal;
            let or_envImp = objetoJson.or_envImp;
            let or_totalImp = objetoJson.or_totalImp;
            let or_totalFinal = objetoJson.or_totalFinal;
            let or_agenteID = objetoJson.or_agenteID;
            let or_dirEnvioID = objetoJson.or_dirEnvioID;
            let or_dirFactID = objetoJson.or_dirFactID;
            let or_idCondPago = objetoJson.or_idCondPago;
            let or_idListaP = objetoJson.or_idListaP;
            let or_mensaje = objetoJson.or_mensaje;
           
          

            let parametros = 
                {
                    "or_idCLiente" : or_idCLiente,
                    "or_ordenOrigen": or_ordenOrigen,
                    "or_codMon" : or_codMon,
                    "lp_CodMoneda" : or_codMon ,
                    "or_subtotal" : or_subtotal,   
                    "or_descTotal" : or_descTotal,
                    "or_descImp" : or_descImp,
                    "or_envioTotal" : or_envioTotal,
                    "or_envImp" : or_envImp,
                    "or_totalImp" : or_totalImp,
                    "or_totalFinal" : or_totalFinal,
                    "or_agenteID" : or_agenteID,
                    "or_dirEnvioID" : or_dirEnvioID,
                    "or_dirFactID" : or_dirFactID,
                    "or_idCondPago" : or_idCondPago,    
                    "or_idListaP" : or_idListaP,
                    "or_mensaje" : or_mensaje,           
                };

                dba.mv_ordenes.create(parametros)     
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
 
         dba.mv_ordenes.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
