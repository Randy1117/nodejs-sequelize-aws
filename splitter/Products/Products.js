const caso1 = require("../../wooCRqsts/Products/TodasProductos");
const caso2 = require("../../wooCRqsts/Products/ProductoEspecifica");
const caso3 = require("../../wooCRqsts/Products/OtroCaso3");
const caso4 = require("../../wooCRqsts/Products/Relaciones");
const caso5 = require("../../wooCRqsts/Products/TodasEtiquetas");
const caso6 = require("../../wooCRqsts/Products/ProductoEmpresa");
const caso7 = require("../../wooCRqsts/Products/ProductosCompleto");
const caso8 = require("../../wooCRqsts/Products/CategoriasCompleto");
const caso9 = require("../../wooCRqsts/Products/EtiquetasCompleto");
const caso10 = require("../../wooCRqsts/Products/Relaciones_CategoriasCompleto");
const caso11 = require("../../wooCRqsts/Products/Relaciones_EtiquetasCompleto");
const caso12 = require("../../controllers/controllers_post/mv_productos_postController");

module.exports = {
    AllProductsController : function(req, res){//control con IF else/ elegir el que cumpla con los requerimientos deseados
        let respuesta = 'Valor nulo por defecto';
        if(typeof req.query.tipoPeticion === "undefined" && req.query.tipoPeticion === "")
            return res.send('Por favor verificar datos ingresados')
        let typeCase = Number(req.query.tipoPeticion);
        (async () => {
          switch(typeCase){
                case 1:
                    respuesta = await caso1.AllProductsController(req/*, res */); 
                    (req/*, res */); 
                    res.send(respuesta); 
                    break;
                case 2:
                    respuesta = await caso2.ProductoEspecifica(req/*, res */); 
                    res.send(respuesta);
                    //res.send("Numero de ordenes obtenido: \n" + respuesta); 
                    break;
                case 3:
                    respuesta = await caso3.OtroCaso3(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 4:
                    respuesta = await caso4.Relacion(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 5:
                    respuesta = await caso5.AllTagsController(req/*, res */); 
                    (req/*, res */); 
                    res.send(respuesta); 
                    break;
                case 6:
                     respuesta = await caso6.Getproducto(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;
                case 7:
                     respuesta = await caso7.GetproductoAll(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;
                case 8:
                     respuesta = await caso8.GetcategoriasAll(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;
                case 9:
                     respuesta = await caso9.GetetiquetasAll(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;
                case 10:
                     respuesta = await caso10.GetrelacateAll(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break; 
                case 11:
                     respuesta = await caso11.GetrelaetiqAll(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;   
                case 12:
                     respuesta = await caso12.Postproductos(req, res); 
                     (req/*, res */); 
                     res.send(respuesta); 
                    break;
                default:
                    res.json( {"Codigo" : -1, "Mensaje" : "Verificar tipo Peticion."} );
                    res.send(respuesta);
                    break;
            }
        })();                    
    }
}