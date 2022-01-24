const dba = require("../../models");

module.exports = {
    updateproductos : function(req, res)
    {       
        (async () => {
            let objetoJson = req.body;
            console.log("JSON recibido");           
          
            let con_idEmpresa = objetoJson.con_idEmpresa;
            let con_nombre = objetoJson.con_nombre;
            let con_apellido = objetoJson.con_apellido;
            let con_Correo = objetoJson.con_Correo;
            let con_telefono = objetoJson.con_telefono;
            let con_puesto = objetoJson.con_puesto;
            let con_idExterna = objetoJson.con_idExterna;
            let con_fechaNac = objetoJson.con_fechaNac;
            let con_Curp = objetoJson.con_Curp;
            let con_rfc = objetoJson.con_rfc;

            let parametros = 
                {
                    "cte_idEmpresa" : cte_idEmpresa,
                    "con_nombre": con_nombre,
                    "con_apellido" : con_apellido,
                    "con_Correo" : con_Correo ,
                    "con_telefono" : con_telefono,   
                    "con_puesto" : con_puesto,   
                    "con_idExterna" : con_idExterna,   
                    "con_fechaNac" : con_fechaNac,   
                    "con_Curp" : con_Curp,   
                    "con_rfc" : con_rfc
                };

                dba.mv_clientes.create(parametros)
        
      
    for(let i = 0; i < items.length; i++) 
    {
     let objdetalles = items[i];
 
     pr_sku = objdetalles.pr_sku;
     pr_ClaveProdServ = objdetalles.pr_ClaveProdServ;
     pr_ClaveUnidad = objdetalles.pr_ClaveUnidad;
   
         let detall = { 
         
            pr_ClaveProdServ : objdetalles.pr_ClaveProdServ,
            pr_ClaveUnidad : objdetalles.pr_ClaveUnidad,
                  
         };
 
         let condicion = {
             where: {
                pr_sku,  
             },
         };             
         let opciones = { multi: true };
 
         dba.mv_clientes.update(detall, condicion, opciones)
         .then(function() {
             // update callback
         });
     } 
           
    res.send("Productos actualizados");
              
        })();
    },   

}; 
