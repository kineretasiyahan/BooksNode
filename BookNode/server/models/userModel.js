const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi")
const Joijoose = require("joigoose")(mongoose)


let joiSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(2).max(50).required(),
    password: Joi.string().min(1).max(50).required()
})
const userValidate = (userData) => {
    const joiSchemaValid= joiSchema.validate(userData);
    return joiSchemaValid;
}
const userSchema = new mongoose.Schema(Joijoose.convert(joiSchema))
// const userSchema = new schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// })
const userModel = mongoose.model("user", userSchema)
module.exports = { userModel, userValidate };
