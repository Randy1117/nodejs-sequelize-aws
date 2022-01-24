const mv_clientes = require("../../controllers/mv_clientesController");
const mv_clientedet = require("../../controllers/mv_clientedetController");
const mv_contactos = require("../../controllers/mv_contactosController");
const mv_direccion = require("../../controllers/mv_direccionController");
const WooUtils = require("../../utils/WooComerce"); 

let api = WooUtils.GetWooComerceApiObject();

function  recuperaCustomer (pagina) {

    api.get("customers", {
        per_page: 100,// 90 products per page
        page : pagina, //iterar aca
    })
    .then(response => {
        let clientes = response.data;

        mv_clientes.InsertCustomers(clientes);                    
        mv_clientedet.InsertCustomersDet(clientes);
        mv_contactos.InsertContactos(clientes);
        mv_direccion.InsertDireccion(clientes);                 
                     
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


					let clientes = null;
					let pagina = 1;
					
					do
					{
						clientes = await api.get("customers", {per_page: 100, page : pagina});
						
                        mv_clientes.InsertCustomers(clientes.data);                    
                        mv_clientedet.InsertCustomersDet(clientes.data);
                        mv_contactos.InsertContactos(clientes.data);
                        mv_direccion.InsertDireccion(clientes.data);      				
						
						pagina++;
					}
					while (clientes.data.length > 0);
					
					resolve({
					  "Codigo" : 0,
					  "Mensaje" : "proceso exitoso - ejecutando en backend"
					});
					api.get("customers", {
						per_page: 100,
					})
					.then(response => {
						let customerCount = response.headers['x-wp-total'];
						let pageCount = response.headers['x-wp-totalpages'];
						console.log("Cantidad de clientes: "+customerCount);
						console.log("paginas por cada 100 clientes: "+pageCount);
					})                  
					.finally(() => {
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