import * as authQuery from "./auth.data.js";
import * as hashing from "../../utils/hashing/hash.js";
import generateCode from "../../utils/generateCode.js";
import { AppError } from "../../utils/AppError.js";
import { sendSysEmail } from "../../utils/email/sendEmail.js";



export const register = async ({ name, email, password, role = "user" }) => {
    const userExists = await authQuery.findUserByEmail(email);
    if (userExists) {
        throw new AppError("there's already an account with this email", 409);
    }

    const hashedPasword = await hashing.passwordHash(password);
    const code = generateCode();

    await sendSysEmail("CONFIRMATION", email, code);

    const user = await authQuery.createUser({
        name,
        email,
        password: hashedPasword,
        code: code,
        isConfirmed: false,
        role
    });
    return {
        name: user.name,
        email: user.email,
    }
};