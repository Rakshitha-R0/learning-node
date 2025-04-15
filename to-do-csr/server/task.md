let tasks =[
    {
        id:1,
        task:'read novel'
    },{
        id:2,
        task:'play chess'
    }
]

app.use(express.json());

app.get("/task",(req, res, next) =>{
    res.send(tasks);
})

app.get("/task/:id",(req, res, next) =>{
    let id= parseInt(req.params.id);
    let task = tasks.find(item => item.id === id);
    if(!task){
        res.send("Task not found");
    }
    res.send(task);
})

app.post("/task",(req, res, next) =>{
    tasks.push({
        id:tasks.length + 1,
        task:req.body.task
    })
    res.send(tasks);
})

app.put("/task/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(item => item.id === id);
    if (!task) {
        return res.status(404).send("Task not found");
    }
    task.task = req.body.task;
    res.send([...task]);
});

app.delete("/task/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(item => item.id === id);
    if (!taskIndex) {
        return res.status(404).send("Task not found");
    }
    tasks.splice(taskIndex, 1);
    res.send(tasks);
})