import { registerUser, loginUser } from "../services/auth.services.js";

export const register = async(req, res, next) => {
    const newUser = await registerUser(req);
    if(!newUser){
        return res.status(401).json({message: "User not created"});
    }
    res.status(200).json(newUser);
}
export const login = async(req, res, next) => {
    const existingUser = await loginUser(req);
    if(!existingUser){
        return res.status(401).json({message: "User not found"});
    }
    res.status(200).json(existingUser);
}