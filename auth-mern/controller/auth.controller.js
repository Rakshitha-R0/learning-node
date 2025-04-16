import { registerUser, loginUser } from "../services/auth.services.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  const newUser = await registerUser(req);
  if (!newUser) {
    return res.status(401).json({ message: "User not created" });
  }

  let token = await generateToken(newUser._id);

  res.status(200).json({
    userName: newUser,token
  });
};
export const login = async (req, res, next) => {
  const { password } = req.body;
  const existingUser = await loginUser(req);
  if (
    !existingUser ||
    !(await existingUser.comparePassword(password, existingUser.password))
  ) {
    return res.status(401).json({ message: "User not found" });
  }
  let token = await generateToken(existingUser._id)
  res.status(200).json({existingUser, token});
};
