module.exports = function(sequelize, DataTypes) {
  var mv_detallelpv = sequelize.define("mv_detallelpv", {
   lpv_IdDetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    lpv_codLp: {
      type: DataTypes.STRING(5),
      allowNull: true,
     
    },
    lpv_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lpv_CodProducto: {
      type: DataTypes.STRING(30),
      allowNull: true,   
   
    },
    lpv_CodProveedor: {
      type: DataTypes.STRING(10),
      allowNull: true,   
   
    }, 
   lpv_IdTab: {
      type: DataTypes.STRING(30),
      allowNull: true,   
    }, 
   lpv_prcBase: {
      type: DataTypes.STRING(30),
      allowNull: true, 
      defaultValue: "0"
    },
   lpv_factor: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },  
   lpv_prcFin: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },
   lpv_TipCalc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    }, 
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['lpv_codLp','lpv_CodProducto','lpv_CodProveedor' ]
        }
    ]
  }
  ,{
      freezeTableName: true
  })
 
  return mv_detallelpv;
};
