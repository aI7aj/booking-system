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

export const getUserById = async(req,res, next)=> {
    try {
        const result = await userService.getUserById(req.params.id);
        res.status(200).json({
            msg: "user returned successfully",
            user: result
        });
    }
    catch(err){
        next(err);
    }

};