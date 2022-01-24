
module.exports = function(sequelize, DataTypes) {
  var mv_listaprecios = sequelize.define("mv_listaprecios", {
    lp_IdListaPrecios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    lp_codLp: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    
    lp_CodProveedor: {
      type: DataTypes.STRING(10),
      allowNull: true,   
   
    }, 
    lp_nomdLp: {
      type: DataTypes.STRING(30),
      allowNull: true,   
    },  
    lp_CodMoneda: {
      type: DataTypes.STRING(30),
      allowNull: true,   
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    }
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['lp_codLp', 'lp_CodProveedor']
        }
    ]
  },
{
      freezeTableName: true
  });
  return mv_listaprecios;
};


