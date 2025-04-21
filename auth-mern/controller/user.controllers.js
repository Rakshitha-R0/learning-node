import { findAllUsers, findUserByID, findUserByEmail } from '../services/user.services.js'
import asyncHandler from "express-async-handler";

export const getUsers = asyncHandler(async(req, res, next) => {
    const allUsers = await findAllUsers();
    if(!allUsers){
        let err = new Error("No users found");
        err.statusCode = 404;
        throw err;
    }
    res.status(200).json(allUsers);
});

export const getUserById = asyncHandler (async(req, res, next) => {
    const user = await findUserByID(req.userID);
    if(!user){
        let err = new Error("User not found");
        err.statusCode = 404;
        throw err;
    }
    res.status(200).json(user);
})

export const getUserByEmail = asyncHandler(async(req, res, next) => {
    const existingUser = await findUserByEmail(req.userEmail);
    if(!existingUser){
        let err = new Error("User not found");
        err.statusCode = 404;
        throw err;
    }
    res.status(200).json(existingUser);
})

    // console.log("userID of get user", req.userID);
    // console.log("userEmail of get user", req.userEmail);
    