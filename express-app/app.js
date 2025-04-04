import express from 'express';
import connectDB from './config/db.js';
import routes from './routes/task.routes.js';
const app = express();
connectDB();

app.use(express.json());
app.use('/task',routes);

export default app;