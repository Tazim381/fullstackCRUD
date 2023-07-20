const mongoose =  require("mongoose");
const Schema = mongoose.Schema;
const User = require("./UserModel");

const userTask = new Schema({
    taskName: String,
    taskType: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const UserTask = mongoose.model("UserTask", userTask);
module.exports = UserTask 