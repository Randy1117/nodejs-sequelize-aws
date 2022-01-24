const dba = require("../models");


module.exports = {
    InsertOrders : function(ordenes){
        
        for(let i = 0; i < ordenes.length; i++)
        {
            dba.mv_ordenes.create({
                 'or_idEmpresa': "09",
                 'or_idordenExt': ordenes[i].id,
                 "or_idCLiente": ordenes[i].customer_id,
                 'or_ordenOrigen': "woo",
                 "or_codMon": ordenes[i].currency,
                 'or_subtotal': ordenes[i].total-ordenes[i].total_tax,
                 'or_descTotal': ordenes[i].discount_total,
                 'or_descImp': ordenes[i].discount_tax,
                 'or_envioTotal': ordenes[i].shipping_total,
                 'or_envImp': ordenes[i].shipping_tax,
                 'or_totalImp': ordenes[i].total_tax,
                 'or_totalFinal': ordenes[i].total,
                 'or_clienteIP': ordenes[i].customer_ip_address,
                 'or_agenteID': "0",
                 'or_dirEnvioID': "1",
                 'or_dirFactID': "2",
                 'or_idCondPago': '1',
                 'or_idListaP': "0",
                 'or_mensaje': ordenes[i].customer_note,
                 'delet': '0'
            })  
        }       
    }        
}

