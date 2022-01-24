const mv_relacion_categoria_producto = require("../../controllers/mv_relacion_categoria_productoController");
const mv_relacion_etiquetas_producto = require("../../controllers/mv_relacion_etiquetas_productoController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaProduct (pagina) {

    api.get("products", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let productos = response.data;     
		mv_relacion_categoria_producto.InsertRelacionCatego(productos);   
		mv_relacion_etiquetas_producto.InsertRelacionEtique(productos);                             
    })            
};  
module.exports = {
    Relacion : function(){
		return new Promise (resolve => {
            (async () => {
				try
				{
					let productos = null;
					let pagina = 1;
					
					do
					{
						productos = await api.get("products", {per_page: 100, page : pagina});
						
	 					mv_relacion_categoria_producto.InsertRelacionCatego(productos.data);   
		                mv_relacion_etiquetas_producto.InsertRelacionEtique(productos.data);    				
						
						pagina++;
					}
					while (productos.data.length > 0);
					
					
					
					resolve({
					  "Codigo" : 0,
					  "Mensaje" : "proceso exitoso - ejecutando en backend"
					});
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