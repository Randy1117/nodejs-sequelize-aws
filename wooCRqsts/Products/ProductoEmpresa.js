const fs = require('fs');
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'database ',
    user     : 'user',
    password : 'password',
});
module.exports = {
    Getproducto : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                var pr_idEmpresa = req.query.pr_idEmpresa ;                
                connection.query('SELECT pr_id,pr_sku,pr_idEmpresa,pr_idw,pr_gtin,pr_imagen,pr_name,pr_description,pr_slug,pr_perma_link,pr_peso,pr_largo,pr_ancho,pr_altura,pr_CuentaContable,pr_type,pr_status,pr_sale_price,pr_date_on_sale_from,pr_date_on_sale_to,pr_on_sale,pr_shipping_required,pr_shipping_taxable,pr_shipping_class,pr_shipping_class_id,pr_stock_status,pr_links,pr_tax_status,pr_tax_class,pr_manage_stock,pr_TasaEntrada,pr_TasaSalida,pr_Bloqueado,pr_ClaveProdServ,pr_ClaveUnidad,pr_Atributo,delet,createdAt,updatedAt FROM mv_productos WHERE pr_idEmpresa = ?',[pr_idEmpresa] , function (error, results, fields) {
                    if (error)
                        throw error;
                
                      
                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Datos mostrados",  
                            "Productos" : results   
                          });   
                });                                 
			})();
		});
    
    }
}
