import * as authQuery from "./auth.data.js";
import * as hashing from "../../utils/hashing/hash.js";
import generateCode from "../../utils/generateCode.js";
import { AppError } from "../../utils/AppError.js";
import { sendSysEmail } from "../../utils/email/sendEmail.js";
import { generateToken } from "../../utils/jwt/generateToken.js";


export const register = async ({ name, email, password, role = "user" }) => {
    const userExists = await authQuery.findUserByEmail(email);
    if (userExists) {
        throw new AppError("there's already an account with this email", 409);
    }

    const hashedPasword = await hashing.passwordHash(password);
    const code = generateCode();

    await sendSysEmail("CONFIRMATION", email, code);

    const user = await authQuery.createUser({
        name,
        email,
        password: hashedPasword,
        code: code,
        isConfirmed: false,
        role
    });
    return {
        name: user.name,
        email: user.email,
    }
};

export const login = async ({ email, password }) => {
    const user = await authQuery.findUserByEmail(email);
    if (!user) {
        throw new AppError("invalid credentials", 401);
    }
    if (!user.isConfirmed) {
        throw new AppError("please confirm your email before logging in", 401);
    }
    if (user.status === "inactive") {
        throw new AppError("your account is disabled, for more information contact support: support@al7aj.com", 403);
    }
    const isMatch = await hashing.passwordCompare(password, user.password);
    if (!isMatch) {
        throw new AppError("invalid credentials", 401);
    }

    const token = generateToken({ id: user.id, email: user.email });

    return { user, token };

}

export const confirmEmail = async ({ email, code }) => {
    const user = await authQuery.findUserByEmail(email);
    if (!user) {
        throw new AppError("no account found with this email", 404);
    }
    if (user.isConfirmed) {
        throw new AppError("email is already confirmed", 400);
    }
    if (user.code !== code) {
        throw new AppError("invalid confirmation code", 400);

    }
    await authQuery.confirmEmail(email, code);
    return true;
};

export const resendCode = async ({ email }) => {
    const user = await authQuery.findUserByEmail(email);
    if (!user) {
        throw new AppError("no account found with this email", 404);
    }
    if (user.isConfirmed) {
        throw new AppError("email is already confirmed", 400);
    }
    const code = user.code || generateCode();
    await authQuery.updateUserCode(email, code);
    await sendSysEmail("CONFIRMATION", email, code);
    return true;
}

export const forgotPassword = async ({ email }) => {
    const user = await authQuery.findUserByEmail(email);
    if (!user) {
        throw new AppError("no account found with this email", 404);
    }
    const code = user.code || generateCode();
    await authQuery.updateUserCode(email, code);
    await sendSysEmail("RESET", email, code);
    return true;

};

export const resetPassword = async ({ email, password, code }) => {
    const user = await authQuery.findUserByEmail(email);
    if (!user) {
        throw new AppError("no account found with this email", 404);
    }
    if (user.code !== code) {
        throw new AppError("invalid reset code or it has expired", 400);
    }
    const isMatch = await hashing.passwordCompare(password, user.password);

    if (isMatch) {
        throw new AppError("new password must be different from the old one", 400);
    }
    const hashedPasword = await hashing.passwordHash(password);

    await authQuery.updatePassword(email, hashedPasword, code);
    await sendSysEmail("PASS_RESET_SUCCESS", email);
    return true;
};