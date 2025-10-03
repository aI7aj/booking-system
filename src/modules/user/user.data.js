
import User from "../../../Database/models/user.model.js";

export const findAllUsers = async () => {
    return await User.findAll({
        attributes: { exclude: ['password', 'code'] } 
    });
};

export const findUserByID = async (id) => {
    return await User.findOne({ 
        where: {id},
        attributes: {exclude: ['password', 'code']} 
    });
};