const dba = require("../models");
module.exports = {
    InsertRelacionEtique : function(productos){
        for(let i = 0; i < productos.length; i++)
        {
            let objproductos = productos[i];
            for (let j = 0; j < objproductos.tags.length; j++)
            {
                let objDetllLin = objproductos.tags[j];

                    dba.mv_relacion_etiquetas_producto.create({
                        // 'idordenDet': detalle[i].id,

                         'CodProducto':  objproductos.sku,
                         'idEtiquetas': objDetllLin.id,                  
                         'delet':'0'
                    })  
            }
        }       
    }        
}
