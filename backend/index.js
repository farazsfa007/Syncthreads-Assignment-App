import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDB from './Models/db.js';
import AuthRouter from './routes/authRoutes.js';
import DashboardRouter from './Routes/DashboardRouter.js'

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=> {
    res.send("hello from server")
})

// Middleware
app.use(bodyParser.json())
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/dashboard',DashboardRouter)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is Running at Port=${PORT}👍`)
})