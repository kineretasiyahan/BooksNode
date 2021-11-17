const { userModel, userValidate } = require('../models/userModel');
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
module.exports = { getAllUsers, createUser, getUserById, updateUser,deleteeUser };