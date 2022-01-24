const dba = require("../models");

module.exports = {
    InsertTags : function(etiquetas){
        for(let i = 0; i < etiquetas.length; i++)
        {
            dba.mv_etiquetas.create({
                 "et_idEtiqueta":etiquetas[i].id,
                 "et_idEmpresa": "09",
                 "et_name":etiquetas[i].name,
                 "et_slug":etiquetas[i].slug,
                 "et_description":etiquetas[i].description,
                 "et_count":etiquetas[i].count,
                 "delet": "0"
            })
            
        }       
    }        
}