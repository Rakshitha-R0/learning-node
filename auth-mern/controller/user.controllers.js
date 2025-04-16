import { findAllUsers } from '../services/user.services.js'

export const getUsers = async(req, res, next) => {
    const allUsers = await findAllUsers();
    res.status(200).json(allUsers);
}