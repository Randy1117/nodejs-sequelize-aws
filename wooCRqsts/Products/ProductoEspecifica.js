const dba = require("../../models");
const WooUtils = require("../../utils/WooComerce"); 
 
module.exports = {
    ProductoEspecifica : function(req){//caso ficticio/ establecer caso real
        try
        {
            return new Promise ((resolve) => {
                let idProducto = req.query.productId;
                let pPagina = 1;//number item default

                if(typeof req.query.pPaginaItems != "undefined" && req.query.pPaginaItems != "")
                    pPagina = req.query.pPaginaItems;

                let api = WooUtils.GetWooComerceApiObject();

                api.get("products/" + idProducto , {
                }).then(response => {       
                   { dba.mv_ordenes.create({
                    "pr_idEmpresa":"09",
                    "pr_idw": response.data.id,
                    "pr_idVariacionesWoo":response.data.attributes.id,
                    "pr_sku":response.data.sku,
                    "pr_gtin":"15432",
                    "pr_name" :response.data.name,
                    "pr_description":response.data.description,
                    "pr_slug":response.data.slug,
                    "pr_perma_link": response.data.perma_link,     
                    "pr_CuentaContable": "0",       
                    "pr_type": response.data.type,
                    "pr_status": response.data.status,
                    "pr_sale_price":response.data.sale_price,        
                    // "pr_date_on_sale_from": response.data.date_on_sale_from,
                    // "pr_date_on_sale_to":response.data.date_on_sale_to  ,   
                     //"pr_on_sale":response.data.on_sale,       
                    // "pr_shipping_required": response.data.shipping_required,      
                    "pr_shipping_taxable": response.data.shipping_taxable,    
                    "pr_shipping_class": response.data.shipping_class,    
                    "pr_shipping_class_id":response.data.shipping_class_id,
                  //  "pr_cross_sell_ids":  response.data.cross_sell_ids,       
                    //"pr_upsell_ids":  response.data.upsell_ids,      
                    // "pr_grouped_products": response.data.grouped_products,      
                    "pr_stock_status" : response.data.stock_status,              
                    "pr_links":   response.data.permalink,
                    "pr_tax_status": response.data.tax_status ,       
                    "pr_tax_class"  :  response.data.tax_class,   
                    "pr_manage_stock" :response.data.manage_stock,
                    "pr_TasaEntrada" : "E",     
                    "pr_TasaSalida" : "S",     
                    "pr_Bloqueado":"0",
                    "pr_ClaveProdServ":"0",
                    "pr_ClaveUnidad":"0",
                    "pr_Atributo":"0",
                    "delet":"0"
                    });}
                    console.log(response.data.id);                                 
                    resolve({
                        status: "success",
                        msg: response.data.id
                    });
                })
                .catch(error => {
                    console.log(error.response.data);
                    resolve({
                        status: "failed",
                        msg: error.response.data.code + " & " + error.response.data.message
                    });
                })
                .finally(() => {
                });
            }); 
        }
        catch(e)
        {
            console.log(e);
        }
    }
}