import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.DB_HOST);

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
    },
    operatorAliases: false
});

export default db;