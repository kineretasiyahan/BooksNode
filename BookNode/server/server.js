require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;
const db = require("./db");
const path=require('path')

const userRouter = require("./routes/userRoute");
const bookRouter = require("./routes/bookRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.on("error", () => {
  console.log("error in function on db");
});

app.get('/', (req, res) => {
    res.send("sucsses");
})
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is running on port ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
