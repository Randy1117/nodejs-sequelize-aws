const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let cte_idEmpresa = objetoJson.cte_idEmpresa;
            let cte_idwoo = objetoJson.cte_idwoo;
            let cte_Nombre = objetoJson.cte_Nombre;
            let cte_Apellidos = objetoJson.cte_Apellidos;
            let cte_Correo = objetoJson.cte_Correo;
         

          

            let parametros = 
                {
                    "cte_idEmpresa" : cte_idEmpresa,
                    "cte_idwoo": cte_idwoo,
                    "cte_Nombre" : cte_Nombre,
                    "cte_Apellidos" : cte_Apellidos ,
                    "cte_Correo" : cte_Correo,   
                             
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
