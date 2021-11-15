const mongoose=require("mongoose");
const MONGODB_URL=process.env.MONGODB_URL || "mongodb+srv://kineret:Aa123456!@cluster0.udluj.mongodb.net/usersDataBase?retryWrites=true&w=majority";

const mongooseConnect = async ()=>{
    await mongoose.connect(MONGODB_URL)
}
mongooseConnect()
.then(()=>{
    console.log("mongoDB atlas is connected")
})
.catch(()=>{
    console.log("error in mongoDB atlas connected")
})

const mongooseConnection = mongoose.connection
module.exports= mongooseConnection;
