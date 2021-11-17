const express = require('express');
const bookRouter = express.Router();
const bookCtrl = require('../controllers/bookController')

bookRouter.get('/',bookCtrl.getAllBooks);
bookRouter.post('/', bookCtrl.createBook);

module.exports = bookRouter;