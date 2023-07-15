const mongoose = require('mongoose')
const schema = mongoose.Schema

const employeeSchema = new schema(
    {
        firstName: {
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        task: {
            type:String,
            required:true,
        },
        
    }
)

const employee =  mongoose.model("Task",employeeSchema)
module.exports = employee