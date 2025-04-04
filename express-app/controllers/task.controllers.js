import Task from '../model/task.model.js';

export const createTask = async(req, res, next) => {
    try {
        let newTask = await Task.create({
            task: req.body.task
        })
        res.status(201);
        res.send(newTask);
    } catch (error) {
        res.status(400);
        res.send("Error: " + error);
    }
}

export const findTask = async(req, res, next) => {
    let tasks = await Task.find();
    res.send(tasks);
}

export const findTaskById = async(req, res, next) =>{
    let id = req.params.id;
    let task = await Task.findById(id);
    res.send(task);
}

export const updateTaskById = 
async(req, res, next) =>{
    let id = req.params.id;
    let updatedTask = await Task.findByIdAndUpdate(
        id,
        {task: req.body.task},
        {new: true}
    )
    res.send(updatedTask);
}

export const deleteTask = async(req, res, next) =>{
    let id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.send("Task deleted"); 
}