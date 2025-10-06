import jwt from "jsonwebtoken";
import { findUserByEmail } from "../modules/auth/auth.data.js";
import { AppError } from "../utils/AppError.js";

export const authenticateJWT = (allowedRoles = []) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return next(new AppError("header authorization is missing", 401));
            }
            const token = authHeader;
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await findUserByEmail(decoded.email);
            if (!user) {
                return next(new AppError("user not found", 401));
            }
            if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
                return next(new AppError("forbidden, access denied", 403));
            }
            req.user = user;
            next();
        } catch (error) {
            if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
                return next(new AppError("expired or invaild token: " + error.message, 401));
            }
            next(error);
        }
    };
};

export const allowSelfOrRole = (allowedRoles = []) => {
    return (req, res, next) => {
        try {
            const requester = req.user;
            const targetID = parseInt(req.params.id);
            if (!requester) {
                return next(new AppError("unauthenticated", 401));
            }
            if (allowedRoles.includes(requester.role) || parseInt(requester.id) === targetID) {
                return next();
            }
            return next(new AppError("forbidden", 403));
        }
        catch (err) {
            next(err);
        }
    };
};
