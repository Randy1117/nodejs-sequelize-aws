const dba = require("../models");
module.exports = {
    InsertRelacionCatego : function(productos){
        for(let i = 0; i < productos.length; i++)
        {
            let objproductos = productos[i];
            for (let j = 0; j < objproductos.categories.length; j++)
            {
                let objDetllLin = objproductos.categories[j];

                    dba.mv_relacion_categoria_producto.create({
                        // 'idordenDet': detalle[i].id,

                         'CodProducto':  objproductos.sku,
                         'CategoryId': objDetllLin.id,             
                         'delet':'0'
                    })
                      
               
            }
        }       
    }        
}