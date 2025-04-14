import { createUser, findUserByEmail } from "./user.services.js";

export const registerUser = async(req) => {
    let newUser = await createUser(req);
    return newUser;
}

export const loginUser = async(req) => {
    let existingUser = await findUserByEmail(req);
    return existingUser;
}