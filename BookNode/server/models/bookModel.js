const mongoose = require("mongoose");
const Joi = require("joi")
const Joijoose = require("joigoose")(mongoose)

let joiSchema = Joi.object({
    name: Joi.string().min(1),
    author: Joi.string().min(1),
    summary: Joi.string().min(1),
    pic: Joi.string().min(1),
    price: Joi.number().min(0).max(500)
})
const bookValidate = (bookData) => {
    const joiSchemaValid = joiSchema.validate(bookData);
    return joiSchemaValid;
}
const bookSchema = new mongoose.Schema(Joijoose.convert(joiSchema))
const bookModel = mongoose.model("book", bookSchema)
module.exports = { bookModel, bookValidate };
