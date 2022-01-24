const caso1 = require("../../wooCRqsts/ListPrecio/TodasListas");
const caso2 = require("../../wooCRqsts/ListPrecio/ListasCompletas");

module.exports = {
    newlistaprecios : function(req, res){//control con IF else/ elegir el que cumpla con los requerimientos deseados
        let respuesta = 'Valor nulo por defecto';

        if(typeof req.query.tipoPeticion === "undefined" && req.query.tipoPeticion === "")
            return res.send('Por favor verificar datos ingresados')

        let typeCase = Number(req.query.tipoPeticion);

        (async () => {
          switch(typeCase){
                case 1:
                    respuesta = await caso1.Getlista(req/*, res */); 
                    res.send(respuesta); 
                    break;
                case 2:
                        respuesta = await caso2.GetlistaAll(req/*, res */); 
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