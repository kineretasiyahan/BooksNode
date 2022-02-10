const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL

const mongooseConnect = async () => {
    await mongoose.connect(MONGODB_URL)
}
mongooseConnect()
    .then(() => {
        console.log("mongoDB atlas is connected")
    })
    .catch(() => {
        console.log("error in mongoDB atlas connected")
    })

const mongooseConnection = mongoose.connection
module.exports = mongooseConnection;
