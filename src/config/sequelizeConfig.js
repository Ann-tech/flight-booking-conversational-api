require('dotenv').config();

const sequelizeConnectionOptions = {
    field: process.env.SEQUELIZE_PASSWORD, 
    rounds: process.env.SEQUELIZE_ROUNDS, 
    compare: 'authenticate', 
}

module.exports = sequelizeConnectionOptions;