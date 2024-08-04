module.exports = (sequelize, DataTypes) => {

    const produk = sequelize.define("produk", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  


          merk_produk: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          gambar:{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:false
          },

          harga:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            primaryKey:false
          },

          deskripsi:{
            type:DataTypes.TEXT,
            allowNull:true,
            primaryKey:false
          },



          
      },{
        sequelize,

        tableName: 'produk',
  
        timestamps: true,
  
        indexes: [
  
          {
  
            name: "PRIMARY",
  
            unique: true,
  
            using: "BTREE",
  
            fields: [
  
              { name: "id" },
  
            ]
  
          },
  
        ]
  
      });
  
    
  
      return produk;
  
    }; 