const express = require("express")
const userRouter = express.Router()
const userCtrl = require("../controllers/userController");
const registerCtrl = require("../controllers/authorization/register")
const logInCtrl = require('../controllers/authorization/logIn')
const checkAuth = require('../middleware/isToken')

userRouter.get('/', userCtrl.getAllUsers);
userRouter.get('/:id', userCtrl.getUserById);
userRouter.post('/', userCtrl.createUser);
userRouter.post('/login', logInCtrl.logIn);
userRouter.post('/register', registerCtrl.register);
userRouter.put('/:id', userCtrl.updateUser);
userRouter.put('/addBook/:id', userCtrl.addBookToUser);
userRouter.put('/addWishList/:id', userCtrl.addBookToWishListUser);
userRouter.put('/deleteBook/:id', userCtrl.deleteBook);
userRouter.delete('/:id', userCtrl.deleteeUser);
userRouter.get('/show/:id', userCtrl.showBooks)
userRouter.get('/showWishList/:id', userCtrl.showBooksInWishList)
module.exports = userRouter;