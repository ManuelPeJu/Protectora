const { DataTypes } = require('sequelize');
const { UUID } = require('uuid');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("dogs",{
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        height: {
          type: DataTypes.STRING,
          allowNull:false,
        },

        breed : {
          type: DataTypes.STRING,
          allowNull: false,
        },

        life_span: {
          type: DataTypes.STRING,
          allowNull: false
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true
        },
        description: {
          type: DataTypes.STRING
        },
        createdInDb: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      },
      {
        timestamps: false,
      }
    ); 
  };
  