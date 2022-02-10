const { bookModel, bookValidate } = require("../models/bookModel");
const { formatError } = require("../errors function/errorsFunctions");

const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    formatError(books);
    res.status(200).json({
      success: true,
      message: "you get all the books!",
      data: books,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "filed to get all the books",
      err: err.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    bookModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json(" books error");
  }
};

const updateBookById = async (req, res) => {
  try { 
    bookModel.findOneAndUpdate(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("method get books");
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
    res.status(301).json("error in method get "+ err.message);
  }
};

const createBook = async (req, res) => {
  try {
    await bookModel.insertMany(req.body.books, (error, result) => {
      if (error) throw error;
      return res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method post "+ err.message);
  }
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};
