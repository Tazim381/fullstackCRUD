const express = require('express')
const router = express.Router()
const UserTask = require('../model/TaskModel')
const authenticateToken = require("../middlewire/auth")


router.post('/users/createTask', authenticateToken, async (req, res) => {
    try {

        const taskObj = {
            taskName: req.body.taskName,
            taskType: req.body.taskType,
            user: req.user.id,
        }
        const userTask = new UserTask(taskObj)
        await userTask.save()
        console.log(userTask)
        res.status(201).json(userTask)

    } catch (error) {
        console.error(error)
    }
})

router.get('/users/getTask', authenticateToken, async (req, res) => {
    const id = req.user.id
    const userTask = await UserTask.find({ user: id })
    if (!userTask) {
        res.status(400).json({ message: "Task paoa jyni" })
    } else {
        res.status(200).send(userTask)
    }
})

router.delete('/users/deleteTask/:id',authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id
        const userTask = await UserTask.findByIdAndDelete({_id:id,user:userId});
        if (userTask) {
          res.status(201).json(userTask);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "delete e jhamela hoise" });
      }

})


router.put('/users/updateTask/:id',authenticateToken, async(req,res) => {
    try{
        const id = req.params.id
        const userId = req.user.id
        const body = req.body
        const userTask = await UserTask.findOneAndUpdate({_id:id,user:userId},body,{new:true})
        if(!userTask) {
            res.status(404).json({message:"user paoa jayni"})
        } else {
            res.status(200).json(userTask)
        }
    } catch (error) {
        console.error(error)
    }
   
})

module.exports = router;