const { userModel, userValidate } = require('../models/userModel');
const { bookModel } = require('../models/bookModel');
const bycrypt = require('bcryptjs')
const getAllUsers = async (req, res) => {
    try {
        userModel.find({}, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        });
    }
    catch (err) {
        res.status(301).json("error in method get")
    }
}
const getUserById = async (req, res) => {
    try {
        userModel.findById(req.params.id, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        });
    }
    catch (err) {
        res.status(301).json("error in method get")
    }
}

const createUser = async (req, res) => {
    try {
        const validData = userValidate(req.body.user)
        if (validData.error) {
            res.json(validData.error.details)
        }
        await userModel.insertMany(req.body.user, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        })
    }
    catch (err) {
        res.status(301).json("error in method post")
    }
    // catch (err) {
    //     res.status(301).json({
    //         message: "error in method post",
    //         success: false,
    //         error: err.message
    //     })
    // }
}
const updateUser = async (req, res) => {
    try {
        userModel.findByIdAndUpdate(req.params.id, req.body.user, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        });
    }
    catch (err) {
        res.status(301).json("error in method get")
    }
}
const deleteeUser = async (req, res) => {
    try {
        userModel.findByIdAndDelete(req.params.id, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        });
    }
    catch (err) {
        res.status(301).json("error in method get")
    }
}
const register = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body.user;
        const validData = userValidate(req.body.user)
        if (validData.error) {
            res.json(validData.error.details)
        }
        await userModel.findOne({ email }).then((user) => {
            if (user) {
                res.status(400).json({ email: "email already exists" })
            }
            else {
                bycrypt.genSalt(10, (err, salt) => {
                    bycrypt.hash(req.body.user.password, salt, async (error, hash) => {
                        try {
                            if (error) throw error;
                            req.body.user.password = hash;
                            const newUser = new userModel({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: req.body.user.password
                            });
                            await newUser.save()
                            res.status(200).json({ data: newUser })
                        }
                        catch (err) {
                            res.status(301).json("someting wrong" + err)
                        }
                    })
                })
            }
        })
    }
    catch (err) {
        console.log(err);
    }

}
const addBookToUser = async (req, res) => {
    console.log("gad help us please")
    try {
        const bookId = await bookModel.findById(req.body._id);
        console.log(bookId)
        const userId = await userModel.findById(req.params.id);
        console.log(userId)
        userId.books.push(bookId);
        await userId.save();
        res.status(200).json({ data: userId })
    }
    catch (err) {
        console.log(err.message)
    }
}
module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteeUser, addBookToUser, register };