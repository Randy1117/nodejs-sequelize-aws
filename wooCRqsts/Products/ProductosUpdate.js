const mv_productos = require("../../controllers/controllers_post/mv_productos_postController");

let api = WooUtils.GetWooComerceApiObject();

function  recuperaProduct (pagina) {

	let objetoJson = req.body;
	console.log("JSON recibido");           
  
	let items = objetoJson.items;  
    api.post("graphql", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let productos = response.data;  
        mv_productos.InsertProducts(productos);    
      	                           
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
						productos = await api.post("graphql", {per_page: 100, page : pagina});
						
						mv_productos.InsertProducts(productos.data);    
						mv_estatus.InsertStatus(productos.data);		
						pagina++;
					}
					while (productos.data.length > 0);
				
					api.post("graphql", {
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