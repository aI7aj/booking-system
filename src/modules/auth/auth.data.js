import { where } from "sequelize";
import User from "../../../Database/models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

export const createUser = async (data) => {
    const user = await User.create(data);
    return user;
};

export const confirmEmail = async (email, code) => {
    await User.update({
        isConfirmed: true,
        code: null
    }, {
        where: { email, code }
    });
};

export const updateUserCode = async (email, code) => {
    await User.update(
        { code }, {
            where: { email }
    })
};