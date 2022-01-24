const dba = require("../models");

module.exports = {
    newlistaprecios : function(req, res)
    {
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");
            console.log(objetoJson);
           // console.log(JSON.stringify(req.body));
            // campos del json a buscar
            let lpv_codLp = objetoJson.lp_codLp;
            let lpv_IdTab = objetoJson.lpv_IdTab;
            let lpv_CodProducto = objetoJson.lpv_CodProducto;
            let lpv_prcBase = objetoJson.lpv_prcBase;
            let lpv_factor = objetoJson.lpv_factor;
            let lpv_prcFin = objetoJson.lpv_prcFin;
            let lpv_TipCalc = objetoJson.lpv_TipCalc;

            let parametros = 
                {
                    "lpv_codLp": lpv_codLp,
                    "lpv_IdTab" : lpv_IdTab,
                    "lpv_CodProducto" :lpv_CodProducto,
                    "lpv_prcBase" : lpv_prcBase,
                    "lpv_factor" : lpv_factor,
                    "lpv_prcFin" : lpv_prcFin, 
                    "lpv_TipCalc" : lpv_TipCalc                   
                };

                dba.mv_detalleLPV.create(parametros)
                    .then(dbModel => {
                       
                       let lpv_IdTab = "";
                       let lpv_CodProducto = "";
                       let lpv_prcBase= "";
                       let lpv_factor= "";
                       let lpv_prcFin= "";
                       let lpv_TipCalc= "";
                     for(let i = 0; i < items.legth; i++)
                     {
                            lpv_IdTab = items[i].lpv_IdTab;
                            lpv_CodProducto = items[i].lpv_CodProducto;
                            lpv_prcBase = items[i].lpv_prcBase;
                            lpv_factor = items[i].lpv_factor;
                            lpv_prcFin = items[i].lpv_prcFin;
                            lpv_TipCalc = items[i].lpv_TipCalc;  
                              
                          

                            dba.mv_detalleLPV.create(
                                parametros)
                                .then(dbModel => {
                                    res.json( {"Codigo" : 0, "Mensaje" : "Exito"} );
                                    return;
                                })
                                .catch(error => {
                                    res.json( {"Codigo" : 2, "Mensaje" : "Error al registrar el detalle. " + error.message} );
                                    return;                                
                                });
                       }
                    })
                    .catch(error => {
                        res.json( {"Codigo" : 2, "Mensaje" : "Error al registrar el encabezado. " + error.message} );
                        return;                    
                    });
        })();
    }   

}; 
