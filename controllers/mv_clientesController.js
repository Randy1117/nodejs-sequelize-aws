const dba = require("../models");

module.exports = {
    InsertCustomers : function(clientes){
        for(let i = 0; i < clientes.length; i++)
        {
            dba.mv_clientes.create({
                "cte_idEmpresa": "09",
                "cte_idwoo":clientes[i].id,
                "cte_Nombre":clientes[i].first_name,
                "cte_Apellidos":clientes[i].last_name,
                "cte_Correo":clientes[i].email,
                "cte_razonSocial": "0",
                "cte_rfc": "0",             
                "cte_tel":clientes[i].phone,
                "delet": "0"
            })
            
        }       
    }        
} 