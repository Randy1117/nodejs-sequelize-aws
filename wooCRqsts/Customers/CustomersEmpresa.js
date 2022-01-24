const fs = require('fs');
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'database ',
    user     : 'user',
    password : 'password',
});
module.exports = {
    GetCliente : function(req,res){
		return new Promise (resolve => {
            (async () => {
                            
                connection.query('SELECT * FROM mv_clientes INNER JOIN mv_clientedet ON mv_clientes.cte_idwoo = mv_clientedet.cd_idCLiente', function (error, results, fields) {
                    if (error)
                        throw error;
                
                      
                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Datos mostrados",  
                            "Clientes y detalles" : results   
                          });   
                });                                 
			})();
		});
    
    }
}
