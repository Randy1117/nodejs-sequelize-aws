const caso1 = require("../../wooCRqsts/Orders/TodasOrdenes");
const caso2 = require("../../wooCRqsts/Orders/OrdenEspecifica");
const caso3 = require("../../wooCRqsts/Orders/OtroCaso3");
const caso4 = require("../../wooCRqsts/Orders/OrdenesContactos");
const caso5 = require("../../wooCRqsts/Orders/OrdenesEmpresa");
const caso6 = require("../../wooCRqsts/Orders/OrdenesCompleto");


module.exports = {
    AllOrdersController : function(req, res){//control con IF else/ elegir el que cumpla con los requerimientos deseados
        let respuesta = 'Valor nulo por defecto';

        if(typeof req.query.tipoPeticion === "undefined" && req.query.tipoPeticion === "")
            return res.send('Por favor verificar datos ingresados')

        let typeCase = Number(req.query.tipoPeticion);

        (async () => {
          switch(typeCase){
                case 1:
                    respuesta = await caso1.AllOrdersController(req/*, res */); 
                    res.send(respuesta); 
                    break;
                case 2:
                    respuesta = await caso2.OrdenEspecifica(req/*, res */); 
                    res.send(respuesta);
                    //res.send("Numero de ordenes node serverobtenido: \n" + respuesta); 
                    break;
                case 3:
                    respuesta = await caso3.OtroCaso3(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 4:
                    respuesta = await caso4.OrdenesContactos(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 5:
                    respuesta = await caso5.GetLista(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 6:
                    respuesta = await caso6.GetListas(req/*, res */);
                    res.send(respuesta); 
                    break;
                default:
                    respuesta = "verificar tipo Peticion";
                    res.send(respuesta);
                    break;
            }
        })();                    
    }
}