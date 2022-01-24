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
    GetListas : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                connection.query('SELECT * FROM mv_ordenes INNER JOIN mv_ordenesdetalles ON mv_ordenes.or_idordenExt = mv_ordenesdetalles.ord_idorden', function (error, results, fields) {
                    if (error)
                        throw error;
                
                        var jsonContent = JSON.stringify(results);                         
                        fs.writeFile("Ordenes.json", jsonContent, 'utf8', function (err) {
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
                            "Ordenes" : results   
                          });   
                          var buf = Buffer.from(JSON.stringify(results));

                          var data = {
                            Bucket: 'media.megaservicio.net/public',
                            Key: 'Ordenes.json',
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
