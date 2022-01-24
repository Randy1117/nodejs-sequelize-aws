const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let et_idEtiqueta = objetoJson.et_idEtiqueta;
            let et_idEmpresa = objetoJson.et_idEmpresa;
            let et_name = objetoJson.et_name;
            let et_slug = objetoJson.et_slug;
            let et_description = objetoJson.et_description;
            let et_count = objetoJson.et_count;
         

          

            let parametros = 
                {
                    "et_idEtiqueta" : et_idEtiqueta,
                    "et_idEmpresa": et_idEmpresa,
                    "et_name" : et_name,
                    "et_slug" : et_slug ,
                    "et_description" : et_description, 
                    "et_count" : et_count,    
                             
                };

                dba.mv_etiquetas.create(parametros)
        
      
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
 
         dba.mv_etiquetas.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
