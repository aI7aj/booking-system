import * as bookingService from "./booking.service.js";

export const createBooking = async (req, res, next) => {
    try {
        const data = req.body;
        const userId = req.user.id;
        const result = await bookingService.createBooking(userId, data);
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
        const { page, limit } = req.query;
        const result = await bookingService.getAllBookings(page, limit);
        res.status(200).json({
            bookings: result
        });
    }
    catch (err) {
        next(err);
    }
};

export const getMyBookings = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const userId = req.user.id;
        const result = await bookingService.getMyBookings(userId, page, limit);
        res.status(200).json({
            bookings: result
        });
    }
    catch (err) {
        next(err);
    }
};

export const getBookingByID = async (req,res,next)=> {
    try{
        const result = await bookingService.getBookingByID(req.params.id)
        res.status(200).json({
            msg: "booking returned successfully",
            booking: result
        });
    }
    catch(err){
        next(err);
    }
};

export const updateBooking = async (req,res,next)=> {
    try{
        const result = await bookingService.updateBooking(req.params.id, req.body);
        res.status(200).json({
            msg: "Booking updated successfully",
            booking: result
        });
    }
    catch(err){
        next(err);
    }
};

export const deleteBooking = async (req, res, next) => {
    try {
        const bookingID = req.params.id
        const result = await bookingService.deleteBooking(bookingID);
        if (!result) {
            return next(new AppError("Booking not found", 404));
        }
        res.status(200).json({ msg: "booking deleted successfully", })
    }
    catch (err) {
        next(err);
    }
};

export const changeBookingStatus = async (req, res, next) => {
    try {
        const bookingID = req.params.id;
        const result = await bookingService.changeBookingStatus(bookingID, req.body.status);
        res.status(200).json({
            msg: `Booking status changed to ${req.body.status} successfully`,
            booking: result
        });
    } catch (err) {
        next(err);
    }
};