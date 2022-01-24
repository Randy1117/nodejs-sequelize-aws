module.exports = function(sequelize, DataTypes) {
  var mv_productos = sequelize.define("mv_productos", {
    pr_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pr_sku: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      defaultValue: '0'
    },
    pr_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '09'
    },
    pr_idw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '15432'
    },
    pr_gtin: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'

    },

    pr_imagen: {
      type: DataTypes.STRING(600),
      allowNull: false,
      defaultValue: "https://megaservicio.net/wp-content/uploads/2020/02/image_2020_07_31T17_25_48_740Z.png"    
    },

    pr_name: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: '15432'
   
    },
    pr_description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '15432'
      
    }, 
    pr_slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '15432'
    },
    pr_perma_link: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: '15432'     
    },
    pr_peso: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      defaultValue: '0'
    },
    pr_largo: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      defaultValue: '0'
    },    
    pr_ancho: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      defaultValue: '0'
    },    
    pr_altura: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      defaultValue: '0'
    },        
    pr_CuentaContable: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: '0'      
    },  
    pr_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '15432'
      
    },
    pr_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '15432'
      
    },
    pr_sale_price: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '15432'
      
    },

    pr_date_on_sale_from: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '15432'
      
    },

    pr_date_on_sale_to: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '15432'
      
    },

    pr_on_sale: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '15432'
    },

    pr_shipping_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
      
    },

    pr_shipping_taxable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '15432'
      
    },

    pr_shipping_class: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '15432'
    },

    pr_shipping_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },

    pr_stock_status: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '15432'
      
    },

    pr_links: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: '15432'
    },

    pr_tax_status: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '15432'
    },

    pr_tax_class: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '15432'
    },

    pr_manage_stock: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '15432'
    },
    pr_TasaEntrada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'E'
    },
    pr_TasaSalida: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'S'
    },
    pr_Bloqueado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },
    pr_ClaveProdServ: {
      type: DataTypes.STRING(19),
      allowNull: false,
      defaultValue: '0'
    },
    pr_ClaveUnidad: {
      type: DataTypes.STRING(19),
      allowNull: false,
      defaultValue: '0'
    },
    pr_Atributo: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: '15432'
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },

  },{
      freezeTableName: false
  });
  return mv_productos;
};