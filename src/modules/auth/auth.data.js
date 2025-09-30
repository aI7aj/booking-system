import User from "../../../Database/models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

export const createUser = async (data) => {
    const user = await User.create(data);
    return user;
};
