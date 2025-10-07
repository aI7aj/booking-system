import Booking from "../../../Database/models/booking.model.js";
import { Op } from "sequelize";

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

export const findBookingByID = async (id) => {
    return await Booking.findOne({ where: { id } });
}

export const updateBooking = async (id, data) => {
  await Booking.update(data, { where: { id } });
  return await findBookingByID(id);
};

export const deleteBooking = async (id) => {
    return await Booking.destroy({ where: { id } });
};

export const changeBookingStatus = async (id, status) => {
    return await updateBooking(id, { status });
}

export const findUserActiveBookings = async (user, date, time) => {
    return await Booking.findOne({ where: { userId: user, time, date, 
        status: {
        [Op.in]: ["active", "pending"]  
      }
    } });
};