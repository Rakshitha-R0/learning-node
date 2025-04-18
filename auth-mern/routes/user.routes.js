import { Router } from "express";
import { getUsers,getUserById, getUserByEmail } from '../controller/user.controllers.js';
import Auth from '../middlewares/auth.js';

const router = Router();

router.get('/',Auth, getUsers);
router.get('/:id',Auth, getUserById);
router.get('/:email',Auth, getUserByEmail);

export default router;