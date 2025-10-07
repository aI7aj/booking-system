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
router.get("/:id",
    authMiddleware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.getBookingByID));
// PUT     /bookings/:id          --> [ADMIN] Update booking
router.put("/:id",
    authMiddleware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.updateBooking));
// DELETE  /bookings/:id          --> [ADMIN] Delete booking
router.delete("/:id",
    authMiddleware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.deleteBooking));
// PATCH   /bookings/:id/status   --> [ADMIN] Change status of a booking (e.g., confirm/cancel)
router.patch("/:id/status",
    authMiddleware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.changeBookingStatus));




export default router;