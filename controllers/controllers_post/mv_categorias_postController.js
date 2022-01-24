const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let cat_idEmpresa = objetoJson.cat_idEmpresa;
            let cat_name = objetoJson.cat_name;
            let cat_slug = objetoJson.cat_slug;
            let cat_parent = objetoJson.cat_parent;
            let cat_description = objetoJson.cat_description;
         

          

            let parametros = 
                {
                    "cat_idEmpresa" : cat_idEmpresa,
                    "cat_name": cat_name,
                    "cat_slug" : cat_slug,
                    "cat_parent" : cat_parent ,
                    "cat_description" : cat_description,   
                             
                };

                dba.mv_categorias.create(parametros)
        
      
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
 
         dba.mv_categorias.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
