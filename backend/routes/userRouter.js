const {Router} = require('express')
const router = Router()
const User = require('../model/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middlewire/auth")
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads' })

router.post('/createUser', async(req,res) => {
   try{
    
    const {firstName,lastName,email,password} = req.body
    if(!(firstName&& lastName && email && password)) {
       return res.status(400).send("Incomplete User")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const hashPassword = hash;
    const userObj ={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:hashPassword,
    }
    const user = new User(userObj)
    await user.save()
    res.status(201).json(user)
   } catch(error) {
     console.error(error)
     res.status(401).json("user create korte somossa hoitese");
   }
})

router.post('/uploadFile', upload.single('file'), (req, res) => {
  res.json({message:"file uploaded"})
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

router.get("/users/profile", authenticateToken, async (req, res) => {
  try {
      const id = req.user.id;
      const user = await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong to get user" });
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try{

  const user = await User.findOne({ email: email });
  console.log(user)
  const isValidPassword = await bcrypt.compare(password , user.password);
  if (!isValidPassword) {
      res.status(401).json({ message: "wrong password" });
  } else {
    const accessToken = await jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
    );
    const refreshToken = await jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
    );
    userObj = user.toJSON(user);
    userObj["accessToken"] = accessToken;
    userObj["refreshToken"] = refreshToken;
    res.status(201).json(userObj.accessToken);
} } catch(error ) {
    res.status(404).send(error)
}
});

router.get('/check',(req,res) => {
    res.send("checked")
})

module.exports = router

