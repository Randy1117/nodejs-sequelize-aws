const dba = require("../models");

module.exports = {
    InsertCategories : function(categorias){
        for(let i = 0; i < categorias.length; i++)
        {
            let objcategorias = categorias[i];       
            dba.mv_categorias.create({
                "cat_idCategoria": objcategorias.id,
                "cat_idEmpresa": "09",
                "cat_name":objcategorias.name,
                "cat_slug":objcategorias.slug,
                "cat_parent":objcategorias.parent,
                "cat_description":objcategorias.description,
                "delet": "0"
            })
            
        }  
    }     
    }        
