const dba = require("../../models");
const WooUtils = require("../../utils/WooComerce"); 
 
module.exports = {
    CustomerEspecifica : function(req){//caso ficticio/ establecer caso real
        try
        {
            return new Promise ((resolve) => {
                let idCustomer = req.query.customerId;
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                let api = WooUtils.GetWooComerceApiObject();

                api.get("customers/" + idCliente , {
                }).then(response => {       
                   { dba.mv_ordenes.create({
                    'idclientedetalle': '0',
                    'idEmpresa': '09',
                    'idCLiente': clientes[i].id,
                    'usoCfdi': 'g03',
                    'condPago': '001',
                    'limCred': '0',
                    'plaCred': '0',
                    'lp': 'l2',
                    'agente': '0',
                    'categoria':'0',
                    'delet': '0'
           
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