const { userModel, userValidate } = require('../models/userModel');
const getUser = async (req, res) => {
    try {
        userModel.find({}, (error, result) => {
            if (error) console.log("error in method get");
            res.json({ data: result })
        });
    }
    catch (err) {
        res.json("error in method get")
    }
}

const createUser = async (req, res) => {
    try {
        const validData = userValidate(req.body.user)
        if (validData.error) {
            res.json(validData.error.details)
        }
    }
    catch (e) {
        console.log("error in try one")
    }
    try {
        await userModel.insertMany(req.body.user, (error, result) => {
            if (error) console.log("error in method post");
            res.json({ data: result })
        })
    }
    catch (err) {
        console.log("error in method post")
    }
}
// const updateUser = async (req,res)=>{
// await 
// }
// const deleteUser = async (req,res)=>{
// await 
// }

module.exports = { getUser, createUser };