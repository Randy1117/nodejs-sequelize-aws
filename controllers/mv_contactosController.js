const dba = require("../models");
module.exports = {
    InsertContactos : function(clientes){
        for(let i = 0; i < clientes.length; i++)
        {
            let objclientes = clientes[i];
                    dba.mv_contactos.create({
                        'con_idEmpresa':"09",
                        'con_nombre': objclientes.first_name,                     
                        'con_apellido':objclientes.last_name,
                        'con_Correo': objclientes.email 
                      
                                  
                     })
                    
                }
            }
        }
            
           


