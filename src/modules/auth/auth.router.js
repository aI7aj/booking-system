import { Router } from "express";
import * as controller from "./auth.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
// ===== Auth Routes =====

const router = Router();

// POST   /auth/register       --> Register a new user
router.post("/register", asyncHandler(controller.register));Í
// POST   /auth/login          --> Login and get a JWT token
router.post("/login", asyncHandler(controller.login));
// POST   /auth/confirm        --> Confirm email
router.post("/confirm", asyncHandler(controller.confirmEmail));
// POST   /auth/resend-code    --> Resend email confirmation code (optional)
router.post("/resend-code", asyncHandler(controller.resendCode));
// POST   /auth/forgot-password --> Send reset code to email (💡 Bonus)
router.post("/forgot-password", asyncHandler(controller.forgotPassword));
// POST   /auth/reset-password  --> Reset password using code (💡 Bonus)
router.post("/reset-password", asyncHandler(controller.resetPassword));


export default router;