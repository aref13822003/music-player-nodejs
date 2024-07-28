import { configDotenv } from 'dotenv'
import express from 'express'
import morgan from "morgan";
import cors from 'cors'



configDotenv({path:'./config.env'})
const app=express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



export default app