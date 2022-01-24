const dba = require("../../models");

module.exports = {
    Postproductos : function(req, res)
    {       
        (async () => {


            let objetoJson = req.body;
            console.log("JSON recibido");    
            let items = objetoJson.items;

            for(let i = 0; i < items.length; i++) 
            {
                let objdetalles = items[i];

             pr_sku = objdetalles.pr_sku;
             pr_ClaveProdServ = objdetalles.pr_ClaveProdServ;
             pr_ClaveUnidad = objdetalles.pr_ClaveUnidad;
             pr_CuentaContable = objdetalles.pr_CuentaContable;
             pr_gtin = objdetalles.pr_gtin;
             pr_TasaEntrada = objdetalles.pr_TasaEntrada;
             pr_TasaSalida = objdetalles.pr_TasaSalida;

            let values = { 
                pr_ClaveUnidad : objdetalles.pr_ClaveUnidad,
                pr_ClaveProdServ : objdetalles.pr_ClaveProdServ,
                pr_CuentaContable : objdetalles.pr_CuentaContable,
                pr_gtin : objdetalles.pr_gtin,
                pr_TasaEntrada : objdetalles.pr_TasaEntrada,
                pr_TasaSalida : objdetalles.pr_TasaSalida
            };
            let selector = {
                where: {
                    pr_sku: objdetalles.pr_sku,
                },
            };             
            let options = { multi: true };
       dba.mv_productos.update(values, selector, options)
       .then(function() {
        // update callback
    });
} 
    res.send("Productos actualizados");
              
        })();
    },   

}; 
