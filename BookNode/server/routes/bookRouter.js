const express = require("express");
const bookRouter = express.Router();
const bookCtrl = require("../controllers/bookController");

bookRouter.get("/", bookCtrl.getBooks);
bookRouter.get("/:id", bookCtrl.getBookById);
bookRouter.post("/", bookCtrl.createBook);
bookRouter.put("/:id", bookCtrl.updateBookById);
bookRouter.delete("/:id", bookCtrl.deleteBookById);
module.exports = bookRouter;
