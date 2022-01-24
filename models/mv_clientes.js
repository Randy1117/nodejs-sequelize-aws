module.exports = function(sequelize, DataTypes) {
  var mv_clientes = sequelize.define("mv_clientes", {
    cte_idCLiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    cte_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cte_idwoo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cte_Nombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
  
    },
    cte_Apellidos: {
      type: DataTypes.STRING(100),
      allowNull: true,
  
    },
    cte_Correo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      
    },
    cte_razonSocial: {
      type: DataTypes.STRING(100),
      allowNull: true,
  
    },
    cte_rfc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cte_tel: {
      type: DataTypes.STRING(20),
      allowNull: true,
     
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
   

  },{
      freezeTableName: true
  });
  return mv_clientes;
};
