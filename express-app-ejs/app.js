import express from "express";
import ConnectDB from "./config/db.js";
import routes from "./routes/task.routes.js";
import methodOverride from "method-override";
const app = express();
ConnectDB();

app.set("views", "./views");
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use("/tasks", routes);

export default app;
