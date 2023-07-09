require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connectDB = async()=> {
    try{
        await mongoose.connect(uri, { useNewUrlParser: true });
         console.log("Database Connected")
    }catch(error) {
        console.error(error.message)
    }
}

module.exports = connectDB