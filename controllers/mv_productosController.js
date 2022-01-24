const dba = require("../models");
module.exports = {
    InsertProducts : function(productos){
        for(let i = 0; i < productos.length; i++)
        {            
            let objproductos = productos[i];
            for(let j = 0; j < objproductos.images.length; j++)
        {            
            let objimage = objproductos.images[j];
           
            dba.mv_productos.create({
               "pr_idw": objproductos.id,    
               "pr_imagen": objimage.src,
               "pr_name" :objproductos.name,
               "pr_description":objproductos.description,
               "pr_slug":objproductos.slug,
               "pr_sku":objproductos.sku,
               "pr_perma_link": objproductos.permalink,
               "pr_peso": objproductos.weight,
               "pr_largo": objproductos.dimensions.length,           
               "pr_ancho": objproductos.dimensions.width,           
               "pr_altura": objproductos.dimensions.height,           
               "pr_type": objproductos.type,
               "pr_status": objproductos.status,
               "pr_sale_price":objproductos.sale_price,        
               "pr_date_on_sale_from": objproductos.date_on_sale_from,
               "pr_date_on_sale_to":objproductos.date_on_sale_to ,   
               "pr_on_sale":objproductos.on_sale,       
               "pr_shipping_required": objproductos.shipping_required,      
               "pr_shipping_taxable": objproductos.shipping_taxable,    
               "pr_shipping_class": objproductos.shipping_class,    
               "pr_shipping_class_id":objproductos.shipping_class_id,    
               "pr_stock_status" : objproductos.stock_status,              
               "pr_tax_status": objproductos.tax_status ,       
               "pr_tax_class"  :  objproductos.tax_class,   
               "pr_manage_stock" :objproductos.manage_stock,
            })       
        } 
        }      
    }  
}
