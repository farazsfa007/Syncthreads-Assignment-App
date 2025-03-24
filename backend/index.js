import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDB from './Models/db.js';
import AuthRouter from './Routes/AuthRoutes.js'
import DashboardRouter from './Routes/DashboardRouter.js'

const app = express();

const corsOptions = {
    origin: 'https://syncthreads-assignment-app-ui.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};


dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/check',(req,res)=> {
    res.send("hello from server")
})

// Middleware
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use('/auth',AuthRouter)
app.use('/dashboard',DashboardRouter)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is Running at Port=${PORT}👍`)
})