// ===== Booking Routes =====
// POST    /bookings              --> [USER] Create a new booking
// GET     /bookings              --> [ADMIN] Get all bookings with pagination
// GET     /bookings/my           --> [USER] Get my bookings with pagination
// GET     /bookings/:id          --> [ADMIN] Get booking by ID
// PUT     /bookings/:id          --> [ADMIN] Update booking
// DELETE  /bookings/:id          --> [ADMIN] Delete booking
// PATCH   /bookings/:id/status   --> [ADMIN] Change status of a booking (e.g., confirm/cancel)

// NOTE:
// If the ADMIN updates a booking, don't forget to:
// 1. Fetch the user who owns the booking.
// 2. Send them an email using the sendEmail utility.
//    Example: "Your booking on [date] at [time] has been updated."
