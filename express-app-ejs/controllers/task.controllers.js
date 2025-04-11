import {
  create,
  deleteById,
  findAll,
  findById,
  updateById,
} from "../services/task.services.js";

export const createTask = async (req, res, next) => {
  try {
    await create(req);
    res.redirect("/tasks");
  } catch (error) {
    // alert("")
    res.send(`Task not created! Please enter the task name. Go back to main page. <a href="/tasks">Home</a>`);
  }
};

export const findTask = async (req, res, next) => {
  let tasks = await findAll();
  res.render("home", { tasks });
};

export const findTaskById = async (req, res, next) => {
  let task = await findById(req, res);
  // res.send(task);
  res.render("update", { task });
};

export const updateTaskById = async (req, res, next) => {
  await updateById(req);
  res.redirect("/tasks");
  // res.send(updatedTask)
};

export const deleteTask = async (req, res, next) => {
  await deleteById(req);
  res.redirect("/tasks");
};
