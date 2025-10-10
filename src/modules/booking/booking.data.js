import Booking from "../../../Database/models/booking.model.js";
import User from "../../../Database/models/user.model.js";
import { Op } from "sequelize";
import { getPagination, getPagingData } from "../../utils/pagination.js";
export const createBooking = async (data) => {
    return await Booking.create(data);
};

export const findAllBookings = async (page, limit) => {
    const { limit: size, offset } = getPagination(page, limit);
    const result = await Booking.findAndCountAll({
        include: [{
            model: User,
            attributes: ['name', 'email'],
        }],
        order: [['createdAt', 'DESC']],
        limit: size,
        offset
    });
    return getPagingData(result, page, limit);
};

export const findBookingsByUserID = async (userId, page, limit) => {
    const { limit: size, offset } = getPagination(page, limit);
    const result = await Booking.findAndCountAll({
        where: { userId },
        limit: size,
        offset
    });
    return getPagingData(result, page, limit);
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

export const findUserActiveBookings = async (user, date, time) => {
    return await Booking.findOne({
        where: {
            userId: user, time, date,
            status: {
                [Op.in]: ["active", "pending"]
            }
        }
    });
};