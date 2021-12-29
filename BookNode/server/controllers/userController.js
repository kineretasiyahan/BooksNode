const { userModel, userValidate } = require("../models/userModel");
const mongoose = require("mongoose");
const { bookModel } = require("../models/bookModel");
const { object } = require("joi");
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
    console.log(bookId);
    const userId = await userModel.findById(req.params.id);
    console.log(userId);
    userId.books.push(bookId);
    await userId.save();
    res.status(200).json({ data: userId });
    res.status(200).json({ data: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
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
