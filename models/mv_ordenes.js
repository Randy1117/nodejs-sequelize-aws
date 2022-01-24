module.exports = function(sequelize, DataTypes) {
  var mv_ordenes = sequelize.define("mv_ordenes", {
    or_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    or_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    or_idordenExt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    or_idCLiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    or_ordenOrigen: {
      type: DataTypes.STRING(30),
      allowNull: true,
     
    },
    or_codMon: {
      type: DataTypes.STRING(3),

    },
    or_subtotal: {
      type: DataTypes.STRING(11),
      allowNull: true,
   
    },
   
    or_descTotal: {
      type: DataTypes.STRING(11),
      allowNull: true,
      
    },
   
    or_descImp: {
      type: DataTypes.STRING(11),
      allowNull: true,
      
    },
   
    or_envioTotal: {
      type: DataTypes.STRING(11),
      allowNull: true,
      
    },
   
    or_envImp: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
   
    or_totalImp: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
   
    or_totalFinal: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
   
    or_clienteIP: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
   
    or_agenteID: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
   
    or_dirEnvioID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_dirFactID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_idCondPago: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_idListaP: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    or_mensaje: {
      type: DataTypes.STRING(30),
      allowNull: true,
     
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });
  return mv_ordenes;
};
