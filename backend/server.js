const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db')
const employeeRouter = require('./routes/employeeRouter')
const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

connectDB()

app.use("/",employeeRouter)
app.use("/api/",userRouter)
app.use("/api/",taskRouter)


app.listen(PORT,()=>{
    console.log("Server running at port "+ `${PORT}`)
})