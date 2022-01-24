module.exports = function(sequelize, DataTypes) {
    var mv_relacion_etiquetas_producto = sequelize.define("mv_relacion_etiquetas_producto", {
      ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      idEtiquetas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      CodProducto: {
        type: DataTypes.STRING(20),
        allowNull: false,
       
      }
    },

    {
      freezeTableName: false
  });
    return mv_relacion_etiquetas_producto;
  };
  
