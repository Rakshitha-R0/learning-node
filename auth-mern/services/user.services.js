import User from '../model/user.model.js'

export const createUser = async (req) =>{
    const newUser = await User.create(req.body);
    return newUser;
}

export const findUserByID = async (req) => {
    let {id} = req.params;
    let existingUser = await User.findById(id);
    return existingUser;
}

export const findUserByEmail = async (req) => {
    let {email} = req.body;
    let existingUser = await User.findOne({email});
    return existingUser;
}

export const findAllUsers = async () => {
    let allUsers = await User.find();
    return allUsers;
}
