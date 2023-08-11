const { DataTypes } = require('sequelize');

function Booking(sequelize) {
    const BookingSchema = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id",
            }
        },
        flightId: {
            type: DataTypes.INTEGER,
            references: {
                model: "flights",
                key: "id",
            }
        },
        bookingDate: {
            type: DataTypes.DATE,
            allowNull: false,
            default: Date.now(),
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'pending', 'canceled'),
            allowNull: false
        },
        passengerCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'Bookings',
    });
    

    return BookingSchema;
}

module.exports = Flight;