const {Router} = require('express')
const router = Router()
const Task = require('../model/taskModel')


router.get('/users',(req,res)=>{
    res.send("route added")
})

router.get('/getTask',async(req,res) =>{
    const tasks = await Task.find()
    res.json(tasks)
})

router.post("/setTask", async (req, res) => {
   try{
    const taskObj = req.body
    const task = new Task(taskObj);
    await task.save();
    res.status(201).json(task);
   } catch(error) {
    console.error(error)
   }
});

router.put("/updateTask/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const task = await Task.findByIdAndUpdate(id, body, { new: true });
        if (task) {
          res.json(task);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "update e jhamela hoitese" });
      }
 });

 router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        if (task) {
          res.status(201).json(task);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "delete e jhamela hoise" });
      }
 });


module.exports = router