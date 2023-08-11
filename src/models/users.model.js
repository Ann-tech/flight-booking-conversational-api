const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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
        hooks: {
            beforeCreate: async function(user) {
                const salt = await bcrypt.genSalt(10); //whatever number you want
                user.salt = salt;
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
        
    });
    UserSchema.prototype.validPassword = async function(password) {
        return await bcrypt.compare(password, this.password, this.salt);
    }

    return UserSchema;
}

module.exports = User;