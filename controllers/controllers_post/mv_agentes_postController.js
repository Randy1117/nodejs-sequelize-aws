const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let agen_idEmpresa = objetoJson.agen_idEmpresa;
            let agen_nombre = objetoJson.agen_nombre;
            let agen_Apellido = objetoJson.agen_Apellido;
            let agen_Puesto = objetoJson.agen_Puesto;
            let agen_Uid = objetoJson.agen_Uid;
         

          

            let parametros = 
                {
                    "agen_idEmpresa" : agen_idEmpresa,
                    "agen_nombre": agen_nombre,
                    "agen_Apellido" : agen_Apellido,
                    "agen_Puesto" : agen_Puesto ,
                    "agen_Uid" : agen_Uid,   
                             
                };

                dba.mv_agentes.create(parametros)
        
      
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
 
         dba.mv_agentes.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
