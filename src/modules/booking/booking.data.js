import Booking from "../../../Database/models/booking.model.js";

export const createBooking = async (data) => {
    return await Booking.create(data);
};

export const findAllBookings = async () => {
    return await Booking.findAll({
        include: [{
            model: Booking.sequelize.models.User,
            attributes: ['name', 'email'],
    }],
    order: [['createdAt', 'DESC']]
    });
};

export const findBookingsByUserID = async (userId) => {
    return await Booking.findAll({ where: { userId } });
};  