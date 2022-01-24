const dba = require("../models");

module.exports = {
    newlistaprecios : function(req, res)
    {
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");
    
            let lp_codLp = objetoJson.lp_codLp;
            let lp_CodProveedor = objetoJson.lp_CodProveedor;
            let lp_nomdLp = objetoJson.lp_nomdLp;
            let lp_CodMoneda = objetoJson.lp_CodMoneda;
            let delet = objetoJson.delet;
            let items = objetoJson.items;

            let parametros = 
                {
                    "lp_codLp" : lp_codLp,
                    "lp_CodProveedor": lp_CodProveedor,
                    "lp_nomdLp" : lp_nomdLp,
                    "lp_CodMoneda" : lp_CodMoneda ,
                    "delet" : delet                   
                };

                dba.mv_listaprecios.create(parametros)                 
                
                  for(let i = 0; i < items.length; i++)
                  {
                    
                         lpv_IdTab = items[i].lpv_IdTab;
                         lpv_CodProducto = items[i].lpv_CodProducto;
                         lpv_prcBase = items[i].lpv_prcBase;
                         lpv_factor = items[i].lpv_factor;
                         lpv_prcFin = items[i].lpv_prcFin;
                         lpv_TipCalc = items[i].lpv_TipCalc;  
                         delet = 0;
                           
                         let parametros2 = 
                         {
                             "lpv_codLp": lp_codLp,
                             "lpv_CodProveedor": lp_CodProveedor,
                             "lpv_IdTab" : lpv_IdTab,
                             "lpv_CodProducto" :lpv_CodProducto,
                             "lpv_prcBase" : lpv_prcBase,
                             "lpv_factor" : lpv_factor,
                             "lpv_prcFin" : lpv_prcFin, 
                             "lpv_TipCalc" : lpv_TipCalc ,
                             "delet":    delet         
                         };
                         dba.mv_detallelpv.create(
                             parametros2)           
                          }   
                              res.send("Listas subidas");
                       
        })();
       
    },   

}; 
