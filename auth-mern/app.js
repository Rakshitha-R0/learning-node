import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
connectDB();

const app = express();

app.use(express.json());
app.use("/api/v1/auth",authRoutes);

export default app;