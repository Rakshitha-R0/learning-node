import { Router } from "express";
import  validate from "../middlewares/validate.js";
import { register, login } from "../controller/auth.controller.js";
import { loginSchema, registerSchema } from "../validation/auth.validation.js";

const router = Router();

router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)

export default router;