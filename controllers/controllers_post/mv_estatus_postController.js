const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let esta_idEstatus = objetoJson.esta_idEstatus;
            let esta_descripcion = objetoJson.esta_descripcion;
            let esta_sku = objetoJson.esta_sku;
            let esta_imagen = objetoJson.esta_imagen;
            
         

          

            let parametros = 
                {
                    "esta_idEstatus" : esta_idEstatus,
                    "esta_descripcion": esta_descripcion,
                    "esta_sku" : esta_sku,
                    "esta_imagen" : esta_imagen
                   
                             
                };

                dba.mv_clientes.create(parametros)
        
      
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
 
         dba.mv_clientes.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
