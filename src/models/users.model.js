const { DataTypes } = require('sequelize');

function User(sequelize) {
    const UserSchema = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validator: {
                isEmail: true,
                isLowercase: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: "roles",
                key: "id",
            }
        }
    }, {
        tableName: 'users',
    })
    return UserSchema;
}

module.exports = User;
