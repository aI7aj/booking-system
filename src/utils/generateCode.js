import { customAlphabet } from "nanoid";

const generateCode = (length = 7) => {
    const nanoid = customAlphabet("1234567890abcdef", length);
    return nanoid();
};

export default generateCode;