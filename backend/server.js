const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db')
const taskRouter = require('./routes/taskRouter')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

connectDB()

app.use("/",taskRouter)

app.listen(PORT,()=>{
    console.log("Server running at port "+ `${PORT}`)
})