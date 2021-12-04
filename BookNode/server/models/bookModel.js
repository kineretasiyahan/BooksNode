const mongoose = require("mongoose");
const Joi = require("joi")
const Joijoose = require("joigoose")(mongoose)

let joiSchema = Joi.object({
    name: Joi.string().min(1), ref: "user",
    author: Joi.string().min(1), ref: "user",
    summary: Joi.string().min(1), ref: "user",
    pic: Joi.string().min(1), ref: "user",
    price: Joi.number().min(0).max(500), ref: "user"
})

const bookValidate = (bookData) => {
    const joiSchemaValid = joiSchema.validate(bookData);
    return joiSchemaValid;
}

const bookSchema = new mongoose.Schema(Joijoose.convert(joiSchema))

const bookModel = mongoose.model("book", bookSchema)
module.exports = { bookModel, bookValidate };
