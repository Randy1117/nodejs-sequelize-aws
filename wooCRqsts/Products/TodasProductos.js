const mv_categorias = require("../../controllers/mv_categoriasController"); 
const mv_etiquetas = require("../../controllers/mv_etiquetasController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();



module.exports = {
    AllProductsController : function(){
		return new Promise (resolve => {
            (async () => {
				try
				{
					let categorias = null;					
					let pagina = 1;
					
					do
					{
						categorias = await api.get("products/categories", {per_page: 100, page : pagina});
						
                        mv_categorias.InsertCategories(categorias.data);
	 				
						pagina++;
					}
					while (categorias.data.length > 0);
				
					api.get("products/categories", {
						per_page: 100,
					})
					.then(response => {
						let productCount = response.headers['x-wp-total'];
						let pageCount = response.headers['x-wp-totalpages'];
						console.log("Cantidad de productos: "+productCount);
						console.log("paginas por cada 100 productos: "+pageCount);	
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
