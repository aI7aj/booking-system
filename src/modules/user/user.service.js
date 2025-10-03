import * as userData from './user.data.js';


export const getUsers = async () => {
    return await userData.findAllUsers();
}

export const getUserById = async (id) => {
    return await userData.findUserByID(id);
};