const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 
const dba = require("../../models");

module.exports = {
    OtroCaso3 : function(req){//caso ficticio/ establecer caso real
        try
        {
            return new Promise ((resolve) => {

                let idOrden = req.query.orderId;
                let pPagina = 5;//default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                api.get("orders/" + idOrden , {//definir otro Endpoint de woocomerce
                    per_page: pPagina,
                }).then(response => {                                        
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
                resolve({
                    "Codigo" : 0,
                    "Mensaje" : "proceso exitoso - ejecutando en backend"
                  });
            }); 
            
        }
        
        catch(e)
        {
            console.log(e);
        }
    }
}
  
