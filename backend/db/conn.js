require('dotenv').config(); 

const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
})

try{
    sequelize.authenticate()
    console.log('conectamos ao banco de dados')
}catch(error){
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize

