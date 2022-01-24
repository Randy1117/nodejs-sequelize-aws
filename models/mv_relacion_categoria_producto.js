  module.exports = function(sequelize, DataTypes) {
    var mv_relacion_categoria_producto = sequelize.define("mv_relacion_categoria_producto", {
      ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      CodProducto: {
        type: DataTypes.STRING(20),
        allowNull: false,       
      },
      },
   {
        freezeTableName: false
    });
    return mv_relacion_categoria_producto;
  };
  
