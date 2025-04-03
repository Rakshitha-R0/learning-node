import express from 'express';
import {Schema, model, connect} from 'mongoose';

const app = express();

//db connection

async function db(){
    try {
        await connect('mongodb://127.0.0.1:27017/testDB');
        console.log("DB connected");
    } catch (error) {
        console.log("error:", error);
    }
}
db();

//model schema

let taskSchema = new Schema({
    task: {
        type: String,
        required: true,
        trim: true,
    }
})

//model

let Task = model('Task', taskSchema);

//middlewares

app.use(express.json());

app.post('/task', async(req, res, next) => {
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
})

app.get('/task', async(req, res, next) => {
    let tasks = await Task.find();
    res.send(tasks);
})

app.get('/task/:id', async(req, res, next) =>{
    let id = req.params.id;
    let task = await Task.findById(id);
    res.send(task);
})

app.put('/task/:id', async(req, res, next) =>{
    let id = req.params.id;
    let updatedTask = await Task.findByIdAndUpdate(
        id,
        {task: req.body.task},
        {new: true}
    )
    res.send(updatedTask);
})

app.delete('/task/:id', async(req, res, next) =>{
    let id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.send("Task deleted"); 
})

export default app;