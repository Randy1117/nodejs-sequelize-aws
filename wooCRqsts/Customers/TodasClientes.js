
const mv_clientes = require("../../controllers/mv_clientesController");
const mv_clientedet = require("../../controllers/mv_clientedetController");
const mv_direccion = require("../../controllers/mv_direccionController");
const WooUtils = require("../../utils/WooComerce"); 

module.exports = {
    AllCustomersController : function(req){
        try
        {
            return new Promise ((resolve) => {
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                let api = WooUtils.GetWooComerceApiObject();

                api.get("customers", {
                    per_page: 100,// 90 products per page
                })
                .then(response => {
                    let clientes = response.data;
                    let clientesCount = response.headers['x-wp-total'];
                    let pageCount = response.headers['x-wp-totalpages']
                    console.log("clientes "+clientesCount);
                    console.log("paginas "+pageCount);

                    mv_clientes.InsertCustomers(clientes);                    
                    mv_clientedet.InsertCustomersDet(clientes);
                 
                    mv_direccion.InsertDireccion(clientes);

                    console.log("WooComerce Api Response Status:", response.status);
                    console.log("Woocomerce items: " + clientes.length);

                    resolve({
                        status: "success",
                        msg: clientes.length
                    });
                })
                .catch(error => {
                    console.log("Response Status:", error.response.status);
                    console.log("Response Headers:", error.response.headers);
                    console.log("Response Data:", error.response.data);
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