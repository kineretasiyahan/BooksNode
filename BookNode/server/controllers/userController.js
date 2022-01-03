const { userModel, userValidate } = require("../models/userModel");
const { bookModel } = require("../models/bookModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "booksNode2021";

const getAllUsers = async (req, res) => {
  try {
    userModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get",
      success: false,
      error: err.message
    })
  }
};
const getUserById = async (req, res) => {
  try {
    userModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get",
      success: false,
      error: err.message
    })
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
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post",
      success: false,
      error: err.message
    })
  }
};
const updateUser = async (req, res) => {
  try {
    userModel.findByIdAndUpdate(
      req.params.id,
      req.body.user,
      (error, result) => {
        if (error) throw error;
        res.status(200).json({ data: result });
      }
    );
  } catch (err) {
    res.status(301).json({
      message: "error in method put",
      success: false,
      error: err.message
    })
  }
};
const deleteeUser = async (req, res) => {
  try {
    userModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method delete",
      success: false,
      error: err.message
    })
  }
};

const addBookToUser = async (req, res) => {
  try {
    const bookId = await bookModel.findById(req.body._id);
    const userId = await userModel.findById(req.params.id);
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
    res.status(301).json({
      message: err.message,
      success: false,
      error: err.message
    })
  }
};
const showBooks = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      res.status(400).json("user not find");
    }
    user.populate("books").then((user) => {
      console.log(user);
      const books2 = user.books.map((book) => book);
      res.status(200).json({ data: books2 });
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteeUser,
  addBookToUser,
  showBooks,
};
