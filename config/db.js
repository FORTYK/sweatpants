const { Sequelize, DataTypes } = require("sequelize");

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    logging: (...msg) => console.log(msg),
    dialect: "mysql",
});

const User = sequelize.define(
    "User",
    {
        // Model attributes are defined here
        iduser: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        user_login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_pass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_display: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_registered: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        // Other model options go here
    }
);

module.exports = {
    sequelize,
};
