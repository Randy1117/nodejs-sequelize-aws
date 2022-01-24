module.exports = function(sequelize, DataTypes) {
  var mv_categorias = sequelize.define("mv_categorias", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
     cat_idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: true,

    },
    cat_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cat_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    cat_slug: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cat_parent: {
      type: DataTypes.STRING(45),
      allowNull: true,
     
    },
    cat_description: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ""
    },  
    cat_description: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ""
    },  
    cat_image: {
      type: DataTypes.STRING(350),
      allowNull: true,
      defaultValue: ""
    },  
    cat_links: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ""
    },  
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });

  return mv_categorias;
};


