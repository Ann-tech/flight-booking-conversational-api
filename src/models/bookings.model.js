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
            }, 
            allowNull: false
        },
        flightId: {
            type: DataTypes.INTEGER,
            references: {
                model: "flights",
                key: "id",
            },
            allowNull: false
        },
        bookingDate: {
            type: DataTypes.DATE,
            allowNull: false,
            default: Date.now(),
            validate: {
                notNull: {
                    msg: 'bookingDate field is required'
                }
            }
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'pending', 'canceled'),
            allowNull: false,
            default: 'pending',
            validate: {
                notNull: {
                    msg: 'status field is required'
                }
            }
        },
        passengerCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'passenger field is required'
                }
            }
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'totalPrice field is required'
                }
            }
        }
    }, {
        tableName: 'Bookings',
    });
    

    return BookingSchema;
}

module.exports = Booking;