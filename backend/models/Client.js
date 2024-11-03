const {DataTypes} = require('sequelize')

const db = require('../db/conn')


    const Client = db.define('Client', {
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      birthdate: {
        type: DataTypes.DATE,
        required: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
      },
      address: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.TEXT,
      }
    });
  
    module.exports = Client