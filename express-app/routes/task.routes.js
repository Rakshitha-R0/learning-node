import express from 'express';
import { 
    createTask,
    deleteTask,
    findTask,
    findTaskById,
    updateTaskById} from '../controllers/task.controllers.js';
const routes = express.Router();

routes.post('/', createTask);

routes.get('/', findTask)

routes.get('/:id', findTaskById)

routes.put('/:id', updateTaskById)

routes.delete('/:id', deleteTask)

export default routes;