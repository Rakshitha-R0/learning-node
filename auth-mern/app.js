import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { rateLimit } from 'express-rate-limit'
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
connectDB();

const app = express();

app.use(express.json());



const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use("/api/v1/auth",authRoutes);
app.use('/api/v1/users', userRoutes);

app.all("*", (req, res, next) =>{
    let err=new Error("Page not found")
    err.statusCode=404;
    next(err);
});

//global error handler
app.use((err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";
  
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
  });

export default app;