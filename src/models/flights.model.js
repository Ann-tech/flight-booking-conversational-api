const { DataTypes } = require('sequelize');

function Flight(sequelize) {
    const FlightSchema = sequelize.define("Flight", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        departureCity: {
            type: DataTypes.STRING,
            allowNull: false,
            validator: {
                isLowercase: true
            }
        },
        arrivalCity: {
            type: DataTypes.STRING,
            allowNull: false,
            validator: {
                isLowercase: true
            }
        },
        arrivalTime: {
            type: DataTypes.STRING,
            allowNull: false,
            validator: {
                isLowercase: true
            }
        },
        availableSeats: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validator: {
                isLowercase: true
            }
        },
        ticketPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validator: {
                isLowercase: true
            }
        }
    }, {
        tableName: 'flights',
    });
    

    return FlightSchema;
}

module.exports = Flight;