const mv_ordenes = require("../../controllers/mv_ordenesController");
const mv_ordencontrol = require("../../controllers/mv_ordencontrolController");
const mv_ordenesdetalles = require("../../controllers/mv_ordenesdetallesController");
const WooUtils = require("../../utils/WooComerce"); 

module.exports = {
    AllOrdersController : function(req){
        try
        {
            return new Promise ((resolve) => {
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                let api = WooUtils.GetWooComerceApiObject();

                api.get("orders", {
                    per_page: pPagina,// 90 products per page
                })
                .then(response => {
                    let ordenes = response.data;
                            
                    mv_ordenes.InsertOrders(ordenes);
                    mv_ordencontrol.InsertOrderControl(ordenes);   
                    mv_ordenesdetalles.InsertOrdersDet(ordenes);
                    

                    console.log("WooComerce Api Response Status:", response.status);
                    console.log("Woocomerce items: " + ordenes.length);

                    resolve({
                        status: "success",
                        msg: ordenes.length
                    });
                })
                api.get("orders/line_items", {
                    per_page: pPagina,// 90 products per page
                })
                .then(response => {
                    let ordenes = response.data;
                            
                    mv_ordenesdetalles.InsertOrdersDet(detalle);
                 

                    console.log("WooComerce Api Response Status:", response.status);
                    console.log("Woocomerce items: " + ordenes.length);

                    resolve({
                        status: "success",
                        msg: ordenes.length
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