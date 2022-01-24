const mv_agentes = require("../../controllers/mv_agentesController");
const agentes = require("../../data/agentes"); 

module.exports = {
    AllAgentesController : function(req){
        try
        {
            return new Promise ((resolve) => {
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

            
                let api = agentes();

                api.get("data/agentes", {     
                })
                .then(response => {
                    
                    let agente = response.data;
                    mv_agentes.InsertAgente(agente);                    
                 
                    console.log("WooComerce Api Response Status:", response.status);
                    console.log("Woocomerce items: " + agente.length);
                    resolve({
                        status: "success",
                        msg: agente.length
                    });
                })

                
                .catch(error => {
                    console.log("Response Status:", error.response.status);
                    console.log("Response Headers:", error.response.headers);
                    console.log("Response Data:", error.response.data);
                    resolve({
                        status: "failed",
                        msg: error.response.data.code + " & " + error.response.data.message
                    });
                })
                resolve({
                    "Codigo" : 0,
                    "Mensaje" : "proceso exitoso - ejecutando en backend"
                  });
            }); 
        }
        catch(e)
        {
            console.log(e);
        }
    }
}
  





