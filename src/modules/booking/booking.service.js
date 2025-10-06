import * as bookingQuery from "./booking.data.js";
import { AppError } from '../../utils/AppError.js';


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
    return await bookingQuery.createBooking(bookingData);
};