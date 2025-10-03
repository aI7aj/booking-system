import { Router } from "express";
import * as controller from "./user.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLES from "../../../Database/roles.js";
const router = Router();

// ===== User Routes =====
// GET    /users             --> [ADMIN] Get all users
router.get("/",
    authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.getUsers));
// GET    /users/:id         --> [ADMIN or USER] Get single user by ID
router.get("/:id",
   // authenticateJWT([ROLES.ADMIN, ROLES.USER]),
    asyncHandler(controller.getUserById));

// PUT    /users/:id         --> [ADMIN or USER] Update user
// router.put("/:id",
//     authenticateJWT([ROLES.ADMIN, ROLES.USER]),
//     asyncHandler(controller.updateUser));

// DELETE /users/:id         --> [ADMIN ONLY] Delete user
//router.delete("/:id", authenticateJWT([ROLES.ADMIN]), asyncHandler(controller.deleteUser));


export default router;