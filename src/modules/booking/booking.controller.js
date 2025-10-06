import { authenticateJWT } from "../../middlewares/authMiddleware.js";
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
