const { userModel, userValidate } = require('../models/userModel');
const mongoose = require("mongoose")
const { bookModel } = require('../models/bookModel');
const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs');
const { object } = require('joi');
const SECRET_KEY = process.env.SECRET_KEY || "booksNode"


const getAllUsers = async (req, res) => {
  try {
    userModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get");
  }
};
const getUserById = async (req, res) => {
  try {
    userModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get");
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
    res.status(301).json("error in method post");
  }
  // catch (err) {
  //     res.status(301).json({
  //         message: "error in method post",
  //         success: false,
  //         error: err.message
  //     })
  // }
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
    res.status(301).json("error in method get");
  }
};
const deleteeUser = async (req, res) => {
  try {
    userModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json("error in method get");
  }
};
const register = async (req, res) => {
  try {
      await userModel.findOne({ email: req.body.email }).then((user) => {
          if (user) {
              res.status(400).json({ email: "email already exists" })
          }
          else {
              const { firstName, lastName, email, password } = req.body;
              const newUser = new userModel({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password
              });
              bycrypt.genSalt(10, (err, salt) => {
                  bycrypt.hash(newUser.password, salt, (error, hash) => {
                      if (error) throw error;
                      newUser.password = hash;
                      newUser.save()
                          .then((data) => res.json(data))
                          .catch((err) => { console.log("someting wrong") })
                  })

              })

          }
      })
  }
  catch (err) {
      console.log(err);
  }
}


const logIn = async (req, res) => {
    try {
        const { email, password } = req.body.user;
        const validData = userValidate(req.body.user)
        if (validData.error) {
            res.json(validData.error.details)
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ email: "User not found" });
        }
        console.log(user);
        bycrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                const payload = {
                    id: user._id,
                    email: email,

                };
                jwt.sign(
                    payload,
                    SECRET_KEY,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) return res.status(404).json(err)
                        res.json({
                            success: true,
                            token: token,
                            // expiresTokenIn: "60min",
                            email: payload.email,
                        });
                    }
                );
            } else {
                return res.status(400).json({ password: "Password incorrect" });
            }
        });
        // });
    } catch (error) {
        console.log(error.message);
    }
};
const addBookToUser = async (req, res) => {
    // console.log(req.body._id);
    // console.log(req.params.id);
    try {
        // let book;
        // let user;
        // await bookModel.findById(req.body._id, (err, result) => {
        //     if (err) throw err
        //     // book = result;
        // });
        // await userModel.findById(req.params.id, (err, result) => {
        //     if (err) throw err;
        //     // user = result
        // })
        // console.log(book)
        // if(!book) throw new Error("book not fond!")

        // const userId = await userModel.findById(req.params.id);
        // if (!userId) throw new Error("user not fond!")
        // console.log(userId)

        // userId.books.push(bookId);
        // await userId.save();
        const bookId = await bookModel.findById(req.body._id);
        console.log(bookId)
        const userId = await userModel.findById(req.params.id);
        console.log(userId)
        userId.books.push(bookId);
        await userId.save();
        res.status(200).json({ data: userId })
        res.status(200).json({ data: user })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message })

    }
}
const showBooks = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            res.status(400).json("user not find")
        }
        user.populate("books").then((user) => {
            console.log(user);
            const books2 = user.books.map(book => book);
            res.status(200).json({ data: books2 })
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message })

    }

}
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteeUser,
    addBookToUser,
    register,
    logIn,
    showBooks
};
