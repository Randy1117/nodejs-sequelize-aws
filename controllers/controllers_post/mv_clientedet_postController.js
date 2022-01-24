const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let idEmpresa = objetoJson.idEmpresa;
            let idCLiente = objetoJson.idCLiente;
            let usoCfdi = objetoJson.usoCfdi;
            let condPago = objetoJson.condPago;
            let limCred = objetoJson.limCred;
            let plaCred = objetoJson.plaCred;
            let lp = objetoJson.lp;
            let categoria = objetoJson.categoria;
         
         

          

            let parametros = 
                {
                    "idEmpresa" : idEmpresa,
                    "idCLiente": idCLiente,
                    "usoCfdi" : usoCfdi,
                    "condPago" : condPago ,
                    "limCred" : limCred,   
                    "plaCred" : plaCred, 
                    "lp" : lp, 
                    "categoria" : categoria, 

                             
                };

                dba.mv_clientedet.create(parametros)
        
      
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
 
         dba.mv_clientedet.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
