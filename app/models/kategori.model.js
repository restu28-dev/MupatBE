module.exports = (sequelize, DataTypes) => {

    const kategori = sequelize.define("kategori", {

          id: {

            autoIncrement: true,

            type: DataTypes.BIGINT,

            allowNull: false,

            primaryKey: true

          },  

         Jenis: {

            type: DataTypes.STRING(50),

            allowNull: true

          },

          nama: {

            autoIncrement: false,

            type: DataTypes.TEXT,

            allowNull: false,

            primaryKey: false

          },

          biayasewa : {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: false,

            primaryKey: false

          },

           waktupenyewaan: {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: true,

            primaryKey: false

          }

    }, {

      sequelize,

      tableName: 'kategori',

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

  

    return kategori;

  }; 