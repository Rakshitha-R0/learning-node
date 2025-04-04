import { Schema, model } from "mongoose";

let taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    }
})

const Task = model('Task', taskSchema);

export default Task;