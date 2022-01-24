const dba = require("../../models");
const WooUtils = require("../../utils/WooComerce"); 
 
module.exports = {
    OrdenEspecifica : function(req){//caso ficticio/ establecer caso real
        try
        {
            return new Promise ((resolve) => {
                let idOrden = req.query.orderId;
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                let api = WooUtils.GetWooComerceApiObject();

                api.get("data/unidadsat/" + idOrden , {
                }).then(response => {       
                   { dba.mv_ordenes.create({
                    'or_idEmpresa': "01",
                    "Unid_ClaveUnidad": unidadsat[i].Unid_ClaveUnidad,
                    "Unid_Descripcion": unidadsat[i].Unid_Descripcion,
                    "delet": "0"
                 
                    });}
                    console.log(response.data.id);                                 
                    resolve({
                        status: "success",
                        msg: response.data.id
                    });
                })

                .catch(error => {
                    console.log(error.response.data);
                    resolve({
                        status: "failed",
                        msg: error.response.data.code + " & " + error.response.data.message
                    });
                })
                .finally(() => {
                });
            }); 
        }
        catch(e)
        {
            console.log(e);
        }
    }
}