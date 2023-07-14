const mongoose = require('mongoose')
const schema = mongoose.Schema

const taskSchema = new schema(
    {
        task: {
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        }
    }
)

const task =  mongoose.model("Task",taskSchema)
module.exports = task