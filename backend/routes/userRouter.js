const {Router} = require('express')
const router = Router()
const User = require('../model/UserModel')

router.post('/createUser', async(req,res) => {
   try{
    const userObj = req.body
    const user = new User(userObj)
    await user.save()
    res.status(201).json(user)
   } catch(error) {
     console.error(error)
     res.status(401).json("user create korte somossa hoitese");
   }
})

router.get("/users",( async (req, res) => {
  try {
      const user = await User.find();
      res.status(200).json(user);
      
  } catch (error) {
      console.error(error);
      res.status(401).json("User paoa jyni");
  }
}));

router.get('/check',(req,res) => {
    res.send("checked")
})

module.exports = router

