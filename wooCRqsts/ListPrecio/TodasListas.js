const fs = require('fs');
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'database ',
    user     : 'user',
    password : 'password',
});
module.exports = {
    Getlista : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                connection.query('SELECT * FROM mv_listaprecios INNER JOIN mv_detallelpvs ON mv_listaprecios.lp_codLp = mv_detallelpvs.lpv_codLp' , function (error, results, fields) {
                    if (error)
                        throw error;

                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Datos mostrados",  
                            "Listas" : results   
                          });   
                }); 
                                             
			})();
		});   
    }
}