import * as userData from './user.data.js';
import { AppError } from '../../utils/AppError.js';
import bcrypt from "bcrypt";
import ROLES from '../../../Database/roles.js';

export const getUsers = async () => {
    return await userData.findAllUsers();
}

export const getUserById = async (id) => {
    return await userData.findUserByID(id);
};

export const updateUser = async (user, id, data) => {
    const targetId = parseInt(id);
    const requester = user;
    if (isNaN(targetId)) { throw new AppError("invalid gg id", 400); }
    const isAdmin = requester.role === ROLES.ADMIN;
    if (!isAdmin && parseInt(requester.id, 10) !== targetId) {
        throw new AppError("You can only update your own profile", 403);
    }
    
    const targetUser = await userData.findUserByID(targetId);
    if (!targetUser) {
        throw new AppError("User not found", 404);
    }

    const adminAllowed = ['name', 'email', 'status', 'isConfirmed', 'role'];
    const userAllowed = ['name', 'email', 'password'];
    const allowed = isAdmin ? adminAllowed : userAllowed;

    const updateData = {};
    for (const key of allowed) {
        if (data[key] !== undefined) {
            updateData[key] = data[key];
        }
    }
    if (data.password !== undefined) {
        const newPassword = String(data.password);

        if (!isAdmin) {
            const currentPassword = String(data.currentPassword || "");
            if (!currentPassword) {
                throw new AppError("currentPassword is required to change password", 400);
            }
            const targetSecret = await userData.findUserSecretByID(targetId);
            if (!targetSecret) throw new AppError("User not found", 404);
            const isMatch = await bcrypt.compare(currentPassword, targetSecret.password);
            if (!isMatch) throw new AppError("current password is incorrect", 400);
        }

        updateData.password = await bcrypt.hash(newPassword, 10);
    }
    if (Object.keys(updateData).length === 0) {
        throw new AppError("No valid fields to update", 400);
    }

    return await userData.updateUser(id, updateData);
}