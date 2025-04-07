import express from "express";
import ConnectDB from "./config/db.js";
import routes from "./routes/task.routes.js";
const app = express();
ConnectDB();

app.use(express.json());
app.use("/task", routes);

export default app;
