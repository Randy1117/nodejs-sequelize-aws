const caso1 = require("../../wooCRqsts/Customers/TodasClientes");
const caso2 = require("../../wooCRqsts/Customers/CustomerEspecifica");
const caso3 = require("../../wooCRqsts/Customers/OtroCaso3");
const caso4 = require("../../wooCRqsts/Customers/CustomersEmpresa");
const caso5 = require("../../wooCRqsts/Customers/CustomersCompleto");

module.exports = {
    AllCustomersController : function(req, res){//control con IF else/ elegir el que cumpla con los requerimientos deseados
        let respuesta = 'Valor nulo por defecto';

        if(typeof req.query.tipoPeticion === "undefined" && req.query.tipoPeticion === "")
            return res.send('Por favor verificar datos ingresados')

        let typeCase = Number(req.query.tipoPeticion);

        (async () => {
          switch(typeCase){
                case 1:
                    respuesta = await caso1.AllCustomersController(req/*, res */); 
                    res.send(respuesta); 
                    break;
                case 2:
                    respuesta = await caso2.CustomerEspecifica(req/*, res */); 
                    res.send(respuesta);
                    //res.send("Numero de ordenes obtenido: \n" + respuesta); 
                    break;llkk
                case 3:
                    respuesta = await caso3.OtroCaso3(req/*, res */);
                    res.send(respuesta); 
                    break;
                case 4:
                    respuesta = await caso4.GetCliente();
                    res.send(respuesta); 
                    break;
                case 5:
                    respuesta = await caso5.GetClientes();
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