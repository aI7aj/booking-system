import * as authService from "./auth.service.js";


export const register = async (req, res) => { 
    const result = await authService.register(req.body);
    res.status(201).json({
        msg: "user registered successfully",
        user: result
    });
};