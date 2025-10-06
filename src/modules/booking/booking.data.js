import Booking from "../../../Database/models/booking.model.js";

export const createBooking = async (data) => {
    return await Booking.create(data);
};