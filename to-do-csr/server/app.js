import express from "express";
import ConnectDB from "./config/db.js";
import routes from "./routes/task.routes.js";
import cors from "cors";
const app = express();
ConnectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/tasks", routes);

export default app;
