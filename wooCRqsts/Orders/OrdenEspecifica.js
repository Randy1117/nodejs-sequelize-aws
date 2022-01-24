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

                api.get("orders/" + idOrden , {
                }).then(response => {       
                   { dba.mv_ordenes.create({
                    'or_idEmpresa': "01",
                    'or_idordenExt': ordenes[i].id,
                    "or_idCLiente": ordenes[i].customer_id,
                    'or_ordenOrigen': "woo",
                    "or_codMon": ordenes[i].currency,
                    'or_subtotal': ordenes[i].line_items[i].subtotal,
                    'or_descTotal': ordenes[i].discount_total,
                    'or_descImp': ordenes[i].discount_tax,
                    'or_envioTotal': ordenes[i].shipping_total,
                    'or_envImp': ordenes[i].shipping_tax,
                    'or_totalImp': ordenes[i].total_tax,
                    'or_totalFinal': ordenes[i].total,
                    'or_clienteIP': ordenes[i].customer_id,
                    'or_agenteID': "0",
                    'or_dirEnvioID': "1",
                    'or_dirFactID': "2",
                    'or_idCondPago': '1',
                    'or_idListaP': "0",
                    'or_mensaje': ordenes[i].customer_note,
                    'delet': '0'
                    });}
                    console.log(response.data.id);                                 
                    resolve({
                        status: "success",
                        msg: response.data.id
                    });
                })

                api.get("orders/" + idOrden , {
                }).then(response => {       
                   { dba.mv_ordenesdetalles.create({
                'ord_idEmpresa': "01",
                 // 'ord_idorden':  ordenes[i].id,
                 // 'ord_idWoo': ordenes[i].id,
                 'ord_numItem': "01",
                 'ord_idProducto': ordenes[i].line_items[i].product_id,   
                 'ord_idUnidad': '0',
                 'ord_cantProducto':"01",
                 'ord_cantDIsp': "01",
                 'ord_idTes': "",
                 'ord_precio': "01",
                 'ord_subtotal': "01",
                 'ord_impSubtotal': "01",
                 'ord_desc':  "01",
                 'ord_subdesc': "01",
                 'ord_numPV': '0',
                 'delet':'0'
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