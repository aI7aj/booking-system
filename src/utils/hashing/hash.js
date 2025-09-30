import bycrypt from "bcrypt";

export const passwordHash = async (Plain) => {
    return await bycrypt.hash(Plain, parseInt(process.env.SALT_ROUNDS));
};

export const passwordCompare = async (Plain, hash) => {
    return await bycrypt.compare(Plain, hash);
};