const mv_ordenes = require("../../controllers/mv_ordenesController");
const mv_ordencontrol = require("../../controllers/mv_ordencontrolController");
const mv_ordenesdetalles = require("../../controllers/mv_ordenesdetallesController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaOrd (pagina) {

    api.get("orders", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let ordenes = response.data;  
        mv_ordenes.InsertOrders(ordenes);
        mv_ordencontrol.InsertOrderControl(ordenes); 
        mv_ordenesdetalles.InsertOrdersDet(ordenes);                 
        
    })
    .finally(() => {
    });               
};  
module.exports = {
    OtroCaso3 : function(){
		return new Promise (resolve => {
            (async () => {
				try
				{
					let ordenes = null;
					let pagina = 1;	
					do
					{
						ordenes = await api.get("orders", {per_page: 100, page : pagina});
						
						mv_ordenes.InsertOrders(ordenes.data);
                        mv_ordencontrol.InsertOrderControl(ordenes.data);   
                        mv_ordenesdetalles.InsertOrdersDet(ordenes.data);
						pagina++;
					}
					while (ordenes.data.length > 0);
					api.get("orders", {
						per_page: 100,
					})
					.then(response => {
						let orderCount = response.headers['x-wp-total'];
						let pageCount = response.headers['x-wp-totalpages'];
						console.log("Cantidad de ordenes: "+orderCount);
						console.log("paginas por cada 100 ordenes: "+pageCount);	
					}) 
					resolve({
					  "Codigo" : 0,
					  "Mensaje" : "proceso exitoso - ejecutando en backend"
					});
				}
				catch(e)
				{
					console.log(e);
				}
			})();
		});
    }
};