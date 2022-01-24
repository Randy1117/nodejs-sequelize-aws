const mv_productos = require("../../controllers/mv_productosController");
const mv_estatus = require("../../controllers/mv_estatusController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaProduct (pagina) {

    api.get("products", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let productos = response.data;  
        mv_productos.InsertProducts(productos);    
        mv_estatus.InsertStatus(productos);    	                           
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
					let productos = null;
					
					let pagina = 1;
					
					do
					{
						productos = await api.get("products", {per_page: 100, page : pagina});
						
						mv_productos.InsertProducts(productos.data);    
						mv_estatus.InsertStatus(productos.data);		
						pagina++;
					}
					while (productos.data.length > 0);		
					api.get("products", {
						per_page: 100,
					})
					.then(response => {
						let productCount = response.headers['x-wp-total'];
						let pageCount = response.headers['x-wp-totalpages'];
						console.log("Cantidad de productos: "+productCount);
						console.log("paginas por cada 100 productos: "+pageCount);	
					})                   
				}			
				catch(e)
				{
					console.log(e);
				}
				resolve({
					"Codigo" : 0,
					"Mensaje" : "proceso exitoso - ejecutando en backend"
				  });   
			})();
		});
    }
	
};