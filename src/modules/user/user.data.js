import User from "../../../Database/models/user.model.js";

export const findAllUsers = async () => {
    return await User.findAll({
        attributes: { exclude: ['password', 'code'] }
    });
};

export const findUserByID = async (id) => {
    return await User.findOne({
        where: { id },
        attributes: { exclude: ['password', 'code'] }
    });
};

export const findUserSecretByID = async (id) => {
  return await User.findOne({ where: { id } });
};

export const updateUser = async (id, data) => {
    await User.update(data, { where: { id } });
    return await findUserByID(id);
}; 

export const deleteUser = async (id) => {
    return await User.destroy({ where: { id } });
};