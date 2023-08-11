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
        departureTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        arrivalTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        availableSeats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ticketPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'flights',
    });
    

    return FlightSchema;
}

module.exports = Flight;