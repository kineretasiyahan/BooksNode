const mongoose = require("mongoose")
const Joi = require("joi")
const Joijoose = require("joigoose")(mongoose)

let joiSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(2).max(50).required(),
    password: Joi.string().min(1).max(200).required(),
    books: Joi.array().valid(mongoose.Schema.Types.ObjectId, "book"),
    wishList: Joi.array().valid(mongoose.Schema.Types.ObjectId, "book")
})
const userValidate = (userData) => {
    const joiSchemaValid = joiSchema.validate(userData);
    return joiSchemaValid;
}
const userSchema = new mongoose.Schema(Joijoose.convert(joiSchema))
const userModel = mongoose.model("user", userSchema)
module.exports = { userModel, userValidate };