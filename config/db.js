const { Sequelize, DataTypes } = require("sequelize");

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    logging: (...msg) => console.log(""),//console.log(msg),
    dialect: "mysql",
    define: {
        freezeTableName: true,
    },
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
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        display: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
    }
);

const Post = sequelize.define(
    "Post",
    {
        // Model attributes are defined here
        idpost: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    },
    {
    }
);

const Session = sequelize.define("Session", {
    sid: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userid: DataTypes.INTEGER.UNSIGNED,
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
});

(async () => {
    //await sequelize.sync({ force: true });
    /*
    Put
    */
    /*
    const user = await User.create({
        status: 1,
        login: "FORTYK",
        password: "123123",
        display: "FORTYK",
        email: "example@example.com",
    });

    /*
    Select
    const users = await User.findAll();
    console.log(users.every((user) => user instanceof User));
    console.log("All users:", JSON.stringify(users, null, 2));
    */
})();

module.exports = {
    db: sequelize,
    Session,
    User,
    Post,
};
