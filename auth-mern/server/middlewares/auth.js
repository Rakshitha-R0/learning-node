import jwt from "jsonwebtoken";
import { findUserByID } from "../services/user.services.js";
import asyncHandler from "express-async-handler";

//verifying token
const auth = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization?.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    let err = new Error("Not authorized, no token");
    err.statusCode = 401;
    throw err;
  }

  let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  let user = await findUserByID(decodedToken.id);

  if (!user) {
    let err = new Error("User does not exist!! Please Register.");
    err.statusCode = 404;
    throw err;
  }
  req.userID = user._id;
  req.userEmail = user.email;

  next();
});

export default auth;
