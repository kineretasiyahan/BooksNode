const { bookModel, bookValidate } = require("../models/bookModel");
const {formatError} = require("../errors function/errorsFunctions")
const getAllBooks = async (req, res) => {
  // try {
  //   const books = await bookModel.find({});
  //   if (!books) throw error;
  //   res.status(200).json({ data: books });
  // } catch (err) {
  //   res.status(301).json(err.message + " error in method get books");
  // }

  try {
    const books = await bookModel.find({});
    formatError(books)
    res.status(200).json({
      success: true,
      message: "you get all the books!",
      data: books,
    });


  } catch (err) {
    res.status(301).json({
      success: false,
      message: err.message,
      error: err.message
    })
  }
};

const getBookById = async (req, res) => {
  try {
    bookModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get books");
  }
};

const updateBookById = async (req, res) => {
  try {
    bookModel.findOneAndUpdate(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get books");
  }
};

const deleteBookById = async (req, res) => {
  try {
    bookModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
            res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json("error in method get books");
  }
};

const createBook = async (req, res) => {
  try {
    await bookModel.insertMany(req.body.books, (error, result) => {
      if (error) throw error;
      return res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get books");
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};
