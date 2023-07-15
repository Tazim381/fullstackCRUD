const {Router} = require('express')
const router = Router()
const Employee= require('../model/employeeModel')


router.get('/users',(req,res)=>{
    res.send("route added")
})

router.get('/getTask',async(req,res) =>{
    const employee = await Employee.find()
    res.json(employee)
})

router.post("/setTask", async (req, res) => {
   try{
    const employeeObj = req.body
    const employee = new Employee(employeeObj);
    await employee.save();
    res.status(201).json(employee);
   } catch(error) {
    console.error(error)
   }
});

router.put("/updateTask/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const employee = await Employee.findByIdAndUpdate(id, body, { new: true });
        if (employee) {
          res.json(employee);
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
        const employee = await Employee.findByIdAndDelete(id);
        if (employee) {
          res.status(201).json(employee);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "delete e jhamela hoise" });
      }
 });


module.exports = router
