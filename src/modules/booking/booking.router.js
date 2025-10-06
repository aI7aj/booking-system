import { Router } from 'express';
import * as controller from "./booking.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as authMiddleware from "../../middlewares/authMiddleware.js";
import ROLES from "../../../Database/roles.js";
const router = Router();

// ===== Booking Routes =====
// POST    /bookings              --> [USER] Create a new booking
router.post("/",
    authMiddleware.authenticateJWT([ROLES.USER]),
    asyncHandler(controller.createBooking));

// GET     /bookings              --> [ADMIN] Get all bookings with pagination
router.get("/",
    authMiddleware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.getAllBookings)); // todo paginiation
// GET     /bookings/my           --> [USER] Get my bookings with pagination
router.get("/my",
    authMiddleware.authenticateJWT([ROLES.USER]),
    asyncHandler(controller.getMyBookings)); // todo paginiation
// GET     /bookings/:id          --> [ADMIN] Get booking by ID
// PUT     /bookings/:id          --> [ADMIN] Update booking
// DELETE  /bookings/:id          --> [ADMIN] Delete booking
// PATCH   /bookings/:id/status   --> [ADMIN] Change status of a booking (e.g., confirm/cancel)

// NOTE:
// If the ADMIN updates a booking, don't forget to:
// 1. Fetch the user who owns the booking.
// 2. Send them an email using the sendEmail utility.
//    Example: "Your booking on [date] at [time] has been updated."



export default router;