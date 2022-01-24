const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let ctd_idordenes = objetoJson.ctd_idordenes;
            let ctd_precioxvolumen = objetoJson.ctd_precioxvolumen;
            let ctd_prjconfirmarpedido = objetoJson.ctd_prjconfirmarpedido;
            let ctd_NumRequisi = objetoJson.ctd_NumRequisi;
            let ctd_prjavisoentrega = objetoJson.ctd_prjavisoentrega;
            let ctd_tiempoentrega = objetoJson.ctd_tiempoentrega;
            let ctd_pedidoespecial = objetoJson.ctd_pedidoespecial;
            let ctd_vigenciacotizacion = objetoJson.ctd_vigenciacotizacion;
            let ctd_codreg = objetoJson.ctd_codreg;
            let ctd_tiplib = objetoJson.ctd_tiplib;
            let ctd_tpcarga = objetoJson.ctd_tpcarga;
            let ctd_valida = objetoJson.ctd_valida;
            let ctd_status = objetoJson.ctd_status;
            let ctd_OrderUrl = objetoJson.ctd_OrderUrl;
            let ctd_clienteUrl = objetoJson.ctd_clienteUrl;

            let parametros = 
                {
                    "ctd_idordenes" : ctd_idordenes,
                    "ctd_precioxvolumen": ctd_precioxvolumen,
                    "ctd_prjconfirmarpedido" : ctd_prjconfirmarpedido,
                    "ctd_NumRequisi" : ctd_NumRequisi ,
                    "ctd_prjavisoentrega" : ctd_prjavisoentrega,   
                    "ctd_tiempoentrega" : ctd_tiempoentrega ,
                    "ctd_pedidoespecial" : ctd_pedidoespecial ,
                    "ctd_vigenciacotizacion" : ctd_vigenciacotizacion ,
                    "ctd_codreg" : ctd_codreg ,
                    "ctd_tiplib" : ctd_tiplib ,
                    "ctd_tpcarga" : ctd_tpcarga ,
                    "ctd_valida" : ctd_valida ,
                    "ctd_status" : ctd_status ,
                    "ctd_OrderUrl" : ctd_OrderUrl ,
                    "ctd_clienteUrl" : ctd_clienteUrl
                             
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
