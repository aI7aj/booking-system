import { Router } from "express";
import * as controller from "./user.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as authMiddlware from "../../middlewares/authMiddleware.js";
import ROLES from "../../../Database/roles.js";
const router = Router();

// ===== User Routes =====
// GET    /users             --> [ADMIN] Get all users
router.get("/",
    authMiddlware.authenticateJWT([ROLES.ADMIN]),
    asyncHandler(controller.getUsers));
// GET    /users/:id         --> [ADMIN or USER] Get single user by IDr
router.get("/:id",
    authMiddlware.authenticateJWT([ROLES.ADMIN, ROLES.USER]),
    authMiddlware.allowSelfOrRole([ROLES.ADMIN]),
    asyncHandler(controller.getUserById));

// PUT    /users/:id         --> [ADMIN or USER] Update user
// router.put("/:id",
//     asyncHandler(controller.updateUser));

// DELETE /users/:id         --> [ADMIN ONLY] Delete user


export default router;