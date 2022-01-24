const dba = require("../models");

module.exports = {
    InsertOrderControl : function(ordenes){
        for(let i = 0; i < ordenes.length; i++)
        {
            dba.mv_ordencontrol.create({
                'ctd_idcotDetalle': '0',
                'ctd_idordenes':ordenes[i].id,
                'ctd_precioxvolumen': ordenes[i].prices_include_tax,
                'ctd_prjconfirmarpedido': '0',
                'ctd_NumRequisi':ordenes[i].number,
                'ctd_prjavisoentrega': '0',
                'ctd_tiempoentrega':'0',
                'ctd_pedidoespecial': '0',
                'ctd_vigenciacotizacion':'0',
                'ctd_codreg': '0',
                'ctd_tiplib': '0',
                'ctd_tpcarga': '0',
                'ctd_valida': '0',
                'ctd_status':ordenes[i].status,
                'ctd_OrderUrl':'01',
                'ctd_clienteUrl': '01',
                'delet': '0'
            })
            
        }       
    }        
}

