
# Booking System Starter

This is the starter code for your Booking System task using Node.js and Sequelize.

You’ll complete the logic and implement the remaining endpoints as described below.

---

## 🛠 Project Setup

1. **Fork this repository** to your GitHub account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/AmanSalman/booking-system-starter.git
   cd booking-system-starter
   ```
3. *(Optional)* **Create a new branch to work on**:
   ```bash
   git checkout -b booking-task
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Add your `.env` file** based on `.env.example`.

6. **Run the project**:
   ```bash
   npm run dev
   ```

---

## 📌 What You Need to Do

Your task is to complete the missing logic in the following modules:

### ✅ Auth
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login and receive JWT
- `POST /auth/confirm`: Confirm email
- `POST /auth/resend-code`: Resend email confirmation code (optional)

### ✅ User
- `GET /users`: [admin only] Get all users
- `GET /users/:id`: [admin or user] Get one user
- `PUT /users/:id`: [admin or user] Update user
- `DELETE /users/:id`: [admin or user] Delete user (optional)

### ✅ Bookings
- `POST /bookings`: [user] Create a new booking
- `GET /bookings`: [admin] Get all bookings (with pagination)
- `GET /bookings/my`: [user] Get your own bookings (with pagination)
- `GET /bookings/:id`: [admin] Get a single booking
- `PUT /bookings/:id`: [admin] Update a booking
- `DELETE /bookings/:id`: [admin] Delete a booking
- `PATCH /bookings/:id/status`: [admin] Update booking status (send email)

---

## 🔐 Roles & Access

| Endpoint                  | Roles Allowed        |
|---------------------------|----------------------|
| `/bookings` (GET)         | Admin only           |
| `/bookings/my` (GET)      | User only            |
| `/bookings/:id`           | Admin                |
| `/bookings/:id` (PUT/DEL) | Admin                |
| `/bookings/:id/status`    | Admin only           |

---

## 📩 Important Notes

- When an admin updates a booking or its status, an email should be sent to the user.
- Pagination is required in `/bookings` and `/bookings/my` using `page` & `limit` query params.

---

## ✅ Submission Instructions

1. Push your final changes to your forked repo.
2. Share the GitHub link in the class room.

Happy Coding! 🚀


## About the Course

This project is part of a comprehensive Node.js backend development course designed to provide hands-on experience with building RESTful APIs, implementing authentication and authorization, and working with databases using both SQL (MySQL with Sequelize ORM) and NoSQL (MongoDB with Mongoose ODM).

It aims to help students solidify their understanding through practical tasks and real-world scenarios covering multiple database technologies.
