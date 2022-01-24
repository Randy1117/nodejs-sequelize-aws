const mv_contactos = require("../../controllers/mv_contactosController");

const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaOrd (pagina) {

    api.get("orders", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let ordenes = response.data;  

        mv_contactos.InsertContactos(ordenes);
                      
    })
    .finally(() => {
    });               
};  
module.exports = {
    OrdenesContactos : function(){
		return new Promise (resolve => {
            (async () => {
				try
				{
					let ordenes = null;
					let pagina = 1;	
					do
					{
						ordenes = await api.get("orders", {per_page: 100, page : pagina});
						
						mv_contactos.InsertContactos(ordenes.data); 
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