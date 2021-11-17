const { bookModel, bookValidate } = require("../models/bookModel")

const getAllBooks = async (req, res) => {
    try {
        bookModel.find({}, (error, result) => {
            if (error) throw error;
            res.status(200).json({ data: result })
        })

    }
    catch (err) {
        res.status(301).json("error in method get books")
    }
}
const createBook = async (req, res) => {
    try {
        await bookModel.insertMany(req.body.books, (error, result) => {
            if (error) throw error;
            return res.status(200).json({ data: result })
        })

    }
    catch (err) {
        res.status(301).json("error in method get books")
    }
}

module.exports = { getAllBooks, createBook }