const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/conn');
const User = require('./User'); 


const Client = sequelize.define('Client',{
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User', 
      key: 'id'
    }
  }
})

Client.belongsTo(User)
User.hasMany(Client)

module.exports = Client;
