const express = require("express")
const userRouter = express.Router()

const userCtrl = require("../controllers/userController")

userRouter.get('/', userCtrl.getAllUsers);
userRouter.get('/:id', userCtrl.getUserById);
userRouter.post('/', userCtrl.createUser);
userRouter.post('/register', userCtrl.register);
userRouter.put('/:id', userCtrl.updateUser);
userRouter.put('/addBook/:id', userCtrl.addBookToUser);
userRouter.delete('/:id', userCtrl.deleteeUser);


module.exports = userRouter;