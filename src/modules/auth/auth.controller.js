import * as authService from "./auth.service.js";


export const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json({
            msg: "user registered successfully",
            user: result
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        res.status(200).json({
            msg: "user logged in successfully",
            token: result.token,
        });
    } catch (error) {
        next(error);
    }
}

export const confirmEmail = async (req, res, next) => {
    try {
        await authService.confirmEmail(req.body);
        res.status(200).json({
            msg: "email confirmed successfully, you can now log in"
        });
    } catch (error) {
        next(error);
    }
};

export const resendCode = async (req, res, next) => {
    try {
        await authService.resendCode(req.body);
        res.status(200).json({
            msg: "code has been sent successfully, please check your email"
        });
    } catch (err) {
        next(err);
    }
};

export const forgotPassword = async (req, res, next) => {
    try {
        await authService.forgotPassword(req.body);
        res.status(200).json({
            msg: "a reset code has been sent to your email, check it out!"
        });
    }
    catch (err) {
        next(err);
    }
};
export const resetPassword = async (req, res, next) => {
    try {
        await authService.resetPassword(req.body);
        res.status(200).json({
            msg: "your password has been successfully reseted!"
        });
    }
    catch (err) {
        next(err);
    }
}