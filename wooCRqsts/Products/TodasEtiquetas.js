const mv_etiquetas = require("../../controllers/mv_etiquetasController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaProduct (pagina) { 
    
    api.get("products/tags",{
        per_page: 100,// 90 products per page
    })
    .then(response => {
        let etiquetas = response.data;
        mv_etiquetas.InsertTags(etiquetas);

    }) 
	.finally(() => {
    });    
};  

module.exports = {
    AllTagsController : function(){
		return new Promise (resolve => {
            (async () => {
				try
				{
					let etiquetas = null;					
					let pagina = 1;
					
					do
					{
						etiquetas = await api.get("products/tags", {per_page: 100, page : pagina});
						
                        mv_etiquetas.InsertTags(etiquetas.data);
	 				
						pagina++;
					}
					while (etiquetas.data.length > 0);
				
                    api.get("products/tags",{
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