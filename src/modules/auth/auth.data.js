import { where } from "sequelize";
import User from "../../../Database/models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

export const createUser = async (data) => {
    return await User.create(data);;
};

export const confirmEmail = async (email, code) => {
    return await User.update({
        isConfirmed: true,
        code: null
    }, {
        where: { email, code }
    });
};

export const updateUserCode = async (email, code) => {
    return await User.update(
        { code }, {
        where: { email }
    })
};

export const updatePassword = async (email, password, code) => {
    return await User.update(
        {
            password,
            code: null
        }, {
        where: { email, code }
    })
};