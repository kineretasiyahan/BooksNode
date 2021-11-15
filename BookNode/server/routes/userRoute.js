const express = require("express")
const userRouter = express.Router()

const userCtrl = require("../controllers/userController")

userRouter.get('/', userCtrl.getUser);
userRouter.post('/', userCtrl.createUser);

module.exports=userRouter;