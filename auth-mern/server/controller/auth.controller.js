import { registerUser, loginUser } from "../services/auth.services.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

export const register = asyncHandler( async (req, res, next) => {
  const newUser = await registerUser(req);
  if (!newUser) {
    let err = new Error("User not created");
    err.statusCode = 400;
    throw err;
  }
  let token = await generateToken(newUser._id);
  if (!token) {
    let err = new Error("Token not created");
    err.statusCode = 400;
    throw err;
  }
  res.status(200).json({
    userName: newUser,token
  });
});
export const login = asyncHandler(async (req, res, next) => {
  const { password } = req.body;
  const existingUser = await loginUser(req);
  if (
    !existingUser ||
    !(await existingUser.comparePassword(password, existingUser.password))
  ) {
    let err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }
  let token = await generateToken(existingUser._id)
  res.status(200).json({existingUser, token});
});
