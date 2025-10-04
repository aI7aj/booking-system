import * as userService from "./user.service.js";

export const getUsers = async (req, res, next) => {
    try {
        const result = await userService.getUsers();
        res.status(200).json({
            msg: result.length + " users returned successfully",
            users: result
        });
    }
    catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const result = await userService.getUserById(req.params.id);
        res.status(200).json({
            msg: "user returned successfully",
            user: result
        });
    }
    catch (err) {
        next(err);
    }

};

export const updateUser = async (req, res, next) => {
    try {
        const data = req.body;
        const targetID = req.params.id;
        const result = await userService.updateUser(req.user, targetID, data);
        res.status(200).json({
            msg: "user updated",
            user: result
        })
    }
    catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const userID = req.params.id
        const result = await userService.deleteUser(userID);
        if (!result) {
            return next(new AppError("User not found", 404));
        }
        res.status(200).json({ msg: "user deleted successfully", })
    }
    catch (err) {
        next(err);
    }
};
