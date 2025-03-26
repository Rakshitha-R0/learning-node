import express from 'express';
let app = express();

app.get("/home", (req, res) =>{
    res.send("Hello World");
});

app.listen(5000, () =>{
console.log("Server is on 5000...");

});