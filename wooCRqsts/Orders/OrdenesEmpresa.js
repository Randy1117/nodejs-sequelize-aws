const fs = require('fs');
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'database ',
    user     : 'user',
    password : 'password',
});
module.exports = {
    GetLista : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                connection.query('SELECT * FROM mv_ordenes INNER JOIN mv_ordenesdetalles ON mv_ordenes.or_idordenExt = mv_ordenesdetalles.ord_idorden', function (error, results, fields) {
                    if (error)
                        throw error;
                
                      
                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Datos mostrados",  
                            "Ordenes y detalles" : results   
                          });   
                });                                 
			})();
		});
    
    }
}
