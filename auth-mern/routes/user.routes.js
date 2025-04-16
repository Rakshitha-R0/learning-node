import { Router } from "express";
import { getUsers } from '../controller/user.controllers.js';
import Auth from '../middlewares/auth.js';

const router = Router();

router.get('/',Auth, getUsers);

export default router;