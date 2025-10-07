import * as bookingQuery from "./booking.data.js";
import { AppError } from '../../utils/AppError.js';
import { sendSysEmail } from "../../utils/email/sendEmail.js";
import { findUserByID } from "../user/user.data.js";

export const createBooking = async (user, data) => {
    console.log(user, data);
    if (!user) {
        throw new AppError("Authentication required to create a booking", 401);
    }
    if (!data.date || !data.time) {
        throw new AppError("Date and time are required", 400);
    }
    if (new Date(data.date) < new Date()) {
        throw new AppError("Booking date must be in the future", 400);
    }
    const bookingData = {
        userId: user,
        date: data.date,
        time: data.time,
    };
    const userFetched = await findUserByID(user);

    console.log(userFetched.email);
    if (!userFetched.email) {
        throw new AppError("User email not found", 404);
    }
    await bookingQuery.createBooking(bookingData);
    await sendSysEmail("NEW_BOOKING", userFetched.email, bookingData);

};

export const getAllBookings = async () => {
    return await bookingQuery.findAllBookings();
};

export const getMyBookings = async (userId) => {
    return await bookingQuery.findBookingsByUserID(userId);
};

export const getBookingByID = async (id) => {
    const booking = await bookingQuery.findBookingByID(id);
    if (!booking) {
        throw new AppError("Booking not found", 404);
    }
    return booking;
};

export const updateBooking = async (id, data) => {
    const res = await bookingQuery.updateBooking(id, data);
    if (!res) {
        throw new AppError("Booking not found", 404);
    }
    const dataTosend = { id: res.id, date: res.date, time: res.time, status: res.status };
    const userFetched = await findUserByID(res.userId);
    await sendSysEmail("BOOKING_UPDATED", userFetched.email, dataTosend);
};

export const deleteBooking = async (id) => {
    const deleted = await bookingQuery.deleteBooking(id);
    if (!deleted) {
        throw new AppError("Booking not found", 404);
    }
    return deleted;
};

export const changeBookingStatus = async (id, status) => {
    const validStatuses = ["confirmed", "cancelled", "pending"];
    if (!validStatuses.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }
    const updatedBooking = await bookingQuery.updateBooking(id, { status });
    if (!updatedBooking) {
        throw new AppError("Booking not found", 404);
    }
    const dataTosend = { id: updatedBooking.id, date: updatedBooking.date, time: updatedBooking.time, status: updatedBooking.status };
    const userFetched = await findUserByID(updatedBooking.userId);
    await sendSysEmail("BOOKING_UPDATED", userFetched.email, dataTosend);
    return updatedBooking;
};