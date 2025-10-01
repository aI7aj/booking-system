import * as authService from "./auth.service.js";


export const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json({
            msg: "user registered successfully",
            user: result
        });
    } catch (error) {
        res.status(400).json({ error, msg: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        res.status(200).json({
            msg: "user logged in successfully",
            token: result.token,
        });
    } catch (error) {
        res.status(400).json({ error, msg: error.message });
    }
}

export const confirmEmail = async (req, res) => {
    try {
        await authService.confirmEmail(req.body);
        res.status(200).json({
            msg: "email confirmed successfully, you can now log in"
        });
    } catch (error) {
        res.status(400).json({ error, msg: error.message });
    }
};