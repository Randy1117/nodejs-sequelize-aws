const dba = require("../models");
module.exports = {
    InsertOrdersDet : function(ordenes){
        for(let i = 0; i < ordenes.length; i++)
        {
            let objordenes = ordenes[i];
            for (let j = 0; j < objordenes.line_items.length; j++)
            {
                let objDetllLin = objordenes.line_items[j];
                for(let k = 0; k < objDetllLin.taxes.length; k++)
                {
                    let objDetllLinTaxes = objDetllLin.taxes[k];
                    dba.mv_ordenesdetalles.create({
                        // 'idordenDet': ordenes[i].id,
                         'ord_idEmpresa': "09",
                         'ord_idorden':  objordenes.id,
                         'ord_idCLiente': objordenes.customer_id,
                         'ord_idWoo': objordenes.id,
                         'ord_numItem': objDetllLin.id,
                         'ord_idProducto': objDetllLin.product_id,   
                         'ord_idUnidad': '0',
                         'ord_cantProducto': objDetllLin.quantity,
                         'ord_cantDIsp': objDetllLin.quantity,
                         'ord_idTes': "101",
                         'ord_precio': objordenes.prices_include_tax,
                         'ord_subtotal': objDetllLin.subtotal,
                         'ord_impSubtotal': objDetllLin.subtotal_tax,
                         'ord_precio_unitario':objDetllLin.price,
                         'ord_desc':  objDetllLinTaxes.total,
                         'ord_subdesc':  objDetllLinTaxes.subtotal,
                         'ord_numPV': '0',
                         'delet':'0'
                     })
                    
                }
            }
        }       
    }        
}