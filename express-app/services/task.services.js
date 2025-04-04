import Task from "../model/task.model.js"

 const create = async(req) =>{
   let newTask =  await Task.create({
        task: req.body.task
    })
    return newTask
}

const findAll = async() =>{
    let tasks = await Task.find();
    return tasks;
}

const findById = async(req) =>{
    let id = req.params.id;
    let task = await Task.findById(id);
    return task;
}
const updateById = async(req) =>{
    let id = req.params.id;
    let updatedTask = await Task.findByIdAndUpdate(
        id,
        {task: req.body.task},
        {new: true}
    )
    return updatedTask;
}
const deleteById = async(req) =>{
    let id = req.params.id;
    await Task.findByIdAndDelete(id);

}

export {
    create,
    findAll,
    findById,
    updateById,
    deleteById
}