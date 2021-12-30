const express = require("express")
const userRouter = express.Router()
const userCtrl = require("../controllers/userController");
const checkAuth=require('../middelware/middelware')

userRouter.get('/', userCtrl.getAllUsers);
userRouter.get('/:id', userCtrl.getUserById);
userRouter.post('/', userCtrl.createUser);
userRouter.post('/login', userCtrl.logIn);
userRouter.post('/register', userCtrl.register);
userRouter.put('/:id', userCtrl.updateUser);
userRouter.put('/addBook/:id', userCtrl.addBookToUser);
userRouter.delete('/:id', userCtrl.deleteeUser);
userRouter.get('/show/:id',userCtrl.showBooks)

module.exports = userRouter;