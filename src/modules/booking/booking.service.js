import * as bookingQuery from "./booking.data.js";
import { AppError } from '../../utils/AppError.js';
import { sendSysEmail } from "../../utils/email/sendEmail.js";
import { findUserByID } from "../user/user.data.js";

export const createBooking = async (user, data) => {
    if (!user) {
        throw new AppError("Authentication required to create a booking", 401);
    }
    if (!data.date || !data.time) {
        throw new AppError("Date and time are required", 400);
    }
    if (new Date(data.date) < new Date()) {
        throw new AppError("Booking date must be in the future", 400);
    }
    const CheckConflict = await bookingQuery.findUserActiveBookings(user, data.date, data.time);
    if (CheckConflict) {
        throw new AppError("You already have an active or pending booking in that time", 400);
    }
    const bookingData = {
        userId: user,
        date: data.date,
        time: data.time,
    };


    const userFetched = await findUserByID(user);
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
    if (isNaN(id)) throw new AppError("Invalid booking id", 400);
    if ("status" in data) {
        throw new AppError("Status cannot be changed in this endpoint", 400);
    }
    const currentBooking = await bookingQuery.findBookingByID(id);
    if (!currentBooking) {
        throw new AppError("Booking not found", 404);
    }
    const newDate = data.date ?? currentBooking.date;
    const newTime = data.time ?? currentBooking.time;

    const isDateChanged = Object.prototype.hasOwnProperty.call(data, "date") && data.date !== currentBooking.date;
    const isTimeChanged = Object.prototype.hasOwnProperty.call(data, "time") && data.time !== currentBooking.time;

    if (!(isDateChanged || isTimeChanged)) {
        throw new AppError("No changes detected in date or time", 400);
    }
    if (isDateChanged || isTimeChanged) {
        const CheckConflict = await bookingQuery.findUserActiveBookings(currentBooking.userId, newDate, newTime);
        if (CheckConflict) {
            throw new AppError("You already have an active or pending booking in that time", 400);
        }
    }

    const res = await bookingQuery.updateBooking(id, data);
    try {
        const userFetched = await findUserByID(res.userId);
        if (userFetched?.email) {
            const dataTosend = { id: res.id, date: res.date, time: res.time, status: res.status };
            await sendSysEmail("BOOKING_UPDATED", userFetched.email, dataTosend);
        }
    }
    catch (err) {
        console.error("Error sending email:", err);
    }
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
    const currentBooking = await bookingQuery.findBookingByID(id);
    if (!currentBooking) {
        throw new AppError("Booking not found", 404);
    }
    if (currentBooking.status === status) {
        throw new AppError(`Booking is already ${status}`, 400);
    }
    const updatedBooking = await bookingQuery.updateBooking(id, { status });
    try {
        const userFetched = await findUserByID(updatedBooking.userId);
        if (userFetched?.email) {
            const dataTosend = { id: updatedBooking.id, date: updatedBooking.date, time: updatedBooking.time, status: updatedBooking.status };
            await sendSysEmail("BOOKING_UPDATED", userFetched.email, dataTosend);
        }
    } catch (error) {
        console.error("Error sending email:", error);
    }
    return updatedBooking;
};