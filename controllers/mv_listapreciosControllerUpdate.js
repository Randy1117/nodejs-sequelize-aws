const dba = require("../models");

module.exports = {
    updatelistaprecios : function(req, res)
    {
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");
            
           // console.log(JSON.stringify(req.body));
            // campos del json a buscar
            let items = objetoJson.items;
            
            let values = { 
                lp_nomdLp : objetoJson.lp_nomdLp,
                lp_CodMoneda : objetoJson.lp_CodMoneda,
                items : objetoJson.items
            };
            let selector = {
                where: {
                    lp_codLp: objetoJson.lp_codLp,
                    lp_CodProveedor:objetoJson.lp_CodProveedor
                },
            };             
            let options = { multi: true };
       dba.mv_listaprecios.update(values, selector, options)
       .then(function() {
        // update callback
    });


    for(let i = 0; i < items.length; i++) 
   {
    let objdetalles = items[i];

        lpv_IdTab = objdetalles.lpv_IdTab;
        lpv_CodProducto = objdetalles.lpv_CodProducto;
        lpv_codLp = objetoJson.lp_codLp;
        lpv_CodProveedor = objetoJson.lp_CodProveedor;
        lpv_prcBase = objdetalles.lpv_prcBase;
        lpv_factor = objdetalles.lpv_factor;
        lpv_prcFin = objdetalles.lpv_prcFin;
        lpv_TipCalc = objdetalles.lpv_TipCalc;  

        let detall = { 
        lpv_codLp : objetoJson.lp_codLp,
        lpv_CodProveedor : objetoJson.lp_CodProveedor,
        lpv_IdTab : objdetalles.lpv_IdTab,
        lpv_CodProducto :objdetalles.lpv_CodProducto,
        lpv_prcBase : objdetalles.lpv_prcBase,
        lpv_factor : objdetalles.lpv_factor,
        lpv_prcFin : objdetalles.lpv_prcFin, 
        lpv_TipCalc : objdetalles.lpv_TipCalc            
        };

        let condicion = {
            where: {
                lpv_CodProducto: objdetalles.lpv_CodProducto,
                lpv_codLp : objetoJson.lp_codLp,
                lpv_CodProveedor : objetoJson.lp_CodProveedor,
            },
        };             
        let opciones = { multi: true };

        dba.mv_detallelpv.update(detall, condicion, opciones)
        .then(function() {
            // update callback
        });
    }            
    res.send("Listas actualizadas");
              
        })();
    },   

}; 
