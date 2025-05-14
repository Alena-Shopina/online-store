const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
        process.env.DB_NAME, // Назва бази даних
        process.env.DB_USER, // Користувач
        process.env.DB_PASSWORD, // Пароль
    {
        host: process.env.DB_HOST, // Хост (localhost)
        port: process.env.DB_PORT, // Порт PostgreSQL (5432)
        dialect: "postgres", // Використовуємо PostgreSQL
    }
);

module.exports = sequelize;
