module.exports = (sequelize, DataTypes) => {

  const transaksi = sequelize.define("transaksi", {

        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true
        },  

       jenis_sepeda: {
          type: DataTypes.STRING(50),
          allowNull: true,
          primaryKey: true
        },

        durasa: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: false
        },

        tanggal_sewa: {
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: false
        },

         tanggal_pengembalian: {
          type: DataTypes.STRING(50),
          allowNull: true,
          primaryKey: false
        },

        total_pembayaran: {
          type: DataTypes.STRING(50),
          allowNull: true,
          primaryKey: false
        },
    },{
      sequelize,

      tableName: 'transaksi',

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

  

    return transaksi;

  }; 