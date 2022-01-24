const fs = require('fs');
var AWS = require('aws-sdk');
AWS.config.update({ region: '' });
var s3 = new AWS.S3();
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'database ',
    user     : 'user',
    password : 'password',
});
module.exports = {
    GetproductoAll : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                var pr_idEmpresa = req.query.pr_idEmpresa ;                
                connection.query('SELECT pr_id,pr_sku,pr_idEmpresa,pr_idw,pr_gtin,pr_imagen,pr_name,pr_description,pr_slug,pr_perma_link,pr_peso,pr_largo,pr_ancho,pr_altura,pr_CuentaContable,pr_type,pr_status,pr_sale_price,pr_date_on_sale_from,pr_date_on_sale_to,pr_on_sale,pr_shipping_required,pr_shipping_taxable,pr_shipping_class,pr_shipping_class_id,pr_stock_status,pr_links,pr_tax_status,pr_tax_class,pr_manage_stock,pr_TasaEntrada,pr_TasaSalida,pr_Bloqueado,pr_ClaveProdServ,pr_ClaveUnidad,pr_Atributo,delet,createdAt,updatedAt FROM mv_productos WHERE pr_idEmpresa = ?',[pr_idEmpresa] , function (error, results, fields) {
                    if (error)
                        throw error;
                
                        var jsonContent = JSON.stringify(results);                         
                        fs.writeFile("Productos.json", jsonContent, 'utf8', function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                            console.log(results);
                            console.log("JSON file has been saved.");
                        }); 
                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Datos exportados",  
                            "Productos" : results   
                          });   
                          var buf = Buffer.from(JSON.stringify(results));

                          var data = {
                            Bucket: 'media.megaservicio.net/public',
                            Key: 'Productos.json',
                            Body: buf,
                            ContentEncoding: 'base64',
                            ContentType: 'application/json',
                            ACL: 'public-read'
                        };
                          s3.upload(data, function (err, data) {
                            if (err) {
                                console.log(err);
                                console.log('Error uploading data: ', data);
                            } else {
                                console.log('succesfully uploaded!!!');
                            }
                        });
                });                                 
			})();
		});
    
    }
}
