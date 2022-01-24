const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let dir_idEmpresa = objetoJson.dir_idEmpresa;
            let dir_idCliente = objetoJson.dir_idCliente;
            let dir_tipoDir = objetoJson.dir_tipoDir;
            let dir_dirLine1 = objetoJson.dir_dirLine1;
            let dir_dirLine2 = objetoJson.dir_dirLine2;
            let dir_ciudad = objetoJson.dir_ciudad;
            let dir_estado = objetoJson.dir_estado;
            let dir_CP = objetoJson.dir_CP;
            let dir_Pais = objetoJson.dir_Pais;
            let dir_correo = objetoJson.dir_correo;
            let dir_tel = objetoJson.dir_tel;
         

          

            let parametros = 
                {
                    "dir_idEmpresa" : dir_idEmpresa,
                    "dir_idCliente": dir_idCliente,
                    "dir_tipoDir" : dir_tipoDir,
                    "dir_dirLine1" : dir_dirLine1 ,
                    "dir_dirLine2" : dir_dirLine2,  
                    "dir_ciudad" : dir_ciudad,
                    "dir_estado" : dir_estado,
                    "dir_CP" : dir_CP,
                    "dir_Pais" : dir_Pais,
                    "dir_correo" : dir_correo,
                    "dir_tel" : dir_tel, 
                             
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
