const { userModel, userValidate } = require("../models/userModel");
const { bookModel } = require("../models/bookModel");
const { formatError } = require("../errors function/errorsFunctions");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "booksNode2021";

const getAllUsers = async (req, res) => {
  try {
    const users = userModel.find({});
    formatError(users);
    res.status(200).json({
      success: true,
      message: "success",
      data: users,
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post " + err.message,
      success: false,
      error: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    userModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post " + err.message,
      success: false,
      error: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const validData = userValidate(req.body.user);
    if (validData.error) {
      res.json(validData.error.details);
    }
    await userModel.insertMany(req.body.user, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post " + err.message,
      success: false,
      error: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    userModel.findByIdAndUpdate(
      req.params.id,
      req.body.user,
      (error, result) => {
        if (error) throw error;
        res.status(200).json({
          success: true,
          message: "success",
          data: result,
        });
      }
    );
  } catch (err) {
    res.status(301).json({
      message: "error in method post " + err.message,
      success: false,
      error: err.message,
    });
  }
};

const deleteeUser = async (req, res) => {
  try {
    userModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post " + err.message,
      success: false,
      error: err.message,
    });
  }
};

const addBookToUser = async (req, res) => {
  try {
    const bookId = await bookModel.findById(req.body._id);
    formatError(bookId);
    const userId = await userModel.findById(req.params.id);
    formatError(userId);
    userId.books.push(bookId);
    await userId.save();
    delete userId.password;
    const token = jwt.sign(userId.toJSON(), SECRET_KEY, { expiresIn: "1d" });
    res.status(200).json({
      success: true,
      message: "success",
      data: token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "failed to add book to user!",
      data: err.message,
    });
  }
};

const addBookToWishListUser = async (req, res) => {
  try {
    const bookId = await bookModel.findById(req.body._id);
    formatError(bookId);
    const userId = await userModel.findById(req.params.id);
    formatError(userId);
    userId.wishList.push(bookId);
    await userId.save();
    delete userId.password;
    const token = jwt.sign(userId.toJSON(), SECRET_KEY, { expiresIn: "1d" });
    res.status(200).json({
      success: true,
      message: "success",
      data: token,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: "failed to add book to wishlist!",
      data: err.message,
    });
  }
};

const showBooks = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    formatError(user);
    user.populate("books").then((user) => {
      console.log(user);
      const result = user.books.map((book) => book);
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to show book!",
      data: err.message,
    });
  }
};

const showBooksInWishList = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    formatError(user);
    user.populate("wishList").then((user) => {
      console.log(user);
      const result = user.wishList.map((book) => book);
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to show book in wishlist!",
      data: err.message,
    });
  }
};
const deleteBook = async (req, res) => {
  try {  
    console.log(req.body.userId);
    if (!req.body.userId) throw new Error("id is undefind");
    if (!req.body.bookId) throw new Error("id is undefind");
    const book = await bookModel.findById(req.body.bookId);
    if (!book) throw new Error("the book search failed")   
    const user = await userModel.findByIdAndUpdate(
      req.body.userId,
      { $pull: { books: { _id: book._id } } },
      { new: true }
    );
    if (!user) throw new Error("the book search failed")  
    console.log(user.books.length);
    await user.save();
    delete user.password;
    const token = jwt.sign(user.toJSON(), SECRET_KEY, { expiresIn: "1d" });
   
    res.status(200).json({
      success: true,
      message: "success to update user book!",
      data: token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "failed to update user book!",
      data: err.message,
    });
  }
};

// const deleteBook = async (req, res) => {
//   try {
//     const user = await userModel.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { books: req.body._id } },
//       { new: true }
//     );
//     if (!user) throw new Error("user not fond");
//     user.save();
//     const token = jwt.sign(user.toJSON(), SECRET_KEY, { expiresIn: "1d" });
//     res.status(200).json({
//       success: true,
//       message: "success to update user book!",
//       data: token,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: "failed to update user book!",
//       data: err.message,
//     });
//   }
// };

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteeUser,
  addBookToUser,
  showBooks,
  deleteBook,
  addBookToWishListUser,
  showBooksInWishList,
};
