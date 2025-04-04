import { create, deleteById, findAll, findById, updateById } from '../services/task.services.js';

export const createTask = async(req, res, next) => {
        let newTask = await create(req);
        res.send(newTask);
}

export const findTask = async(req, res, next) => {
    let tasks = await findAll();
    res.send(tasks);
}

export const findTaskById = async(req, res, next) =>{
    let task = await findById(req);
    res.send(task);
}

export const updateTaskById = async(req, res, next) =>{
let updatedTask = await updateById(req);
    res.send(updatedTask);
}

export const deleteTask = async(req, res, next) =>{
    await deleteById(req);
    res.send("Task deleted"); 
}