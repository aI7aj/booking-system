import * as boookService from "./booking.service.js";

export const createBooking = async (req, res, next) => {
    try {
        const data = req.body;
        const userId = req.user.id;
        const result = await boookService.createBooking(userId, data);
        res.status(201).json({
            msg: "Booking created successfully",
            booking: result
        });
    }
    catch (err) {
        next(err);
    }
};

export const getAllBookings = async (req, res, next) => {
    try {
        const result = await boookService.getAllBookings();
        res.status(200).json({
            msg: result.length + " bookings returned successfully",
            bookings: result
        });
    }
    catch (err) {
        next(err);
    }
};

export const getMyBookings = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await boookService.getMyBookings(userId);
        res.status(200).json({
            msg: result.length + " bookings returned successfully",
            bookings: result
        });
    }
    catch (err) {
        next(err);
    }
};