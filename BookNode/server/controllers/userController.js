const { userModel, userValidate } = require("../models/userModel");
const mongoose = require("mongoose");
const { bookModel } = require("../models/bookModel");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const { object } = require("joi");
const SECRET_KEY = process.env.SECRET_KEY || "booksNode2021";

const getAllUsers = async (req, res) => {
  try {
    userModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get",
      success: false,
      error: err.message
    })
  }
};
const getUserById = async (req, res) => {
  try {
    userModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get",
      success: false,
      error: err.message
    })
  }
};

const createUser = async (req, res) => {
  try {
    const validData = userValidate(req.body.user);
    if (validData.error) {
      res.json(validData.error.details);
    }
    await userModel.insertMany(req.body.user, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post",
      success: false,
      error: err.message
    })
  }
};
const updateUser = async (req, res) => {
  try {
    userModel.findByIdAndUpdate(
      req.params.id,
      req.body.user,
      (error, result) => {
        if (error) throw error;
        res.status(200).json({ data: result });
      }
    );
  } catch (err) {
    res.status(301).json({
      message: "error in method put",
      success: false,
      error: err.message
    })
  }
};
const deleteeUser = async (req, res) => {
  try {
    userModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method delete",
      success: false,
      error: err.message
    })
  }
};
const register = async (req, res) => {
  try {
    await userModel.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        res.status(400).json({ email: "email already exists" });
      } else {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new userModel({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        bycrypt.genSalt(10, (err, salt) => {
          bycrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error;
            newUser.password = hash;
            newUser
              .save()
              .then((data) => res.json(data))
              .catch((err) => {
                console.log("someting wrong");
              });
          });
        });
      }
    });
  } catch (err) {
    res.status(301).json({
      message: "error in register",
      success: false,
      error: err.message
    })
  }
};

const logIn = async (req, res) => {
  // בודקים שהסיסמה והאיימל שקיבלנו מהקליינט הכן קיימים
  const { email, password } = req.body.user;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "there is error with email or password.",
      error: "email and password is required ",
    });
  }

  // מתחילים ניסוי של מצאית משתמש על פי הנתונים מהקליינט ומגבים בהתאם
  try {
    // מנסים למצוא משתמש לפי איימל
    const user = await userModel.findOne({ email });

    // במידה ולא קיים מחזירים תשובה לקליינט שלא קיים משתמש כזה
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "email not found",
        errors: { email: "email not fond" },
      });
    }

    /*
           אין 
           else
           בגלל שבמידה והתנאי מתקיים אנחנו יוצאים מהפונקציה מכיוון שהחזרנו תשובה לקליינט 
    */

    // משווים את הסיסמה שהקיבלנו מהקליינט לסיסמה של המשתמש שמצאנו על פי המייל ותופסים במשתנה את מה שחוזר לנו מהפונקציה של ההשוואה
    const isPasswordCorrect = await bycrypt.compare(password, user.password);

    // במידה ומה שחזר מהפונקציה של ההשוואה לא תואם אז מחזירים לקליינט תשובה שהסיסמה שגויה ולא מתאימה
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "wrong password",
        errors: { password: "wrong password" },
      });
    }

    /*
           אין 
           else
           בגלל שבמידה והתנאי מתקיים אנחנו יוצאים מהפונקציה מכיוון שהחזרנו תשובה לקליינט 
    */

    // מוחקים את הסיסמה של המשתמש כדי שנוכל להחזיר לקליינט נתונים רלוונטים ולא רגישים מדי
    delete user.password;

    /* 

        יוצרים תוקן להחזיר לקליינט במידה והכל עבר בהצלחה 
        זה ישמש אותנו בהמשך כדי לאמת נתונים של משתמש לפני שנציג לנו מידע מסוים 
        זה יעזור לנו לוודא שהכן הבקשות שנשלחות מהקליינט הכן אמינות

    */
    const token = jwt.sign(user.toJSON(), SECRET_KEY, { expiresIn: "1d" });
    res.status(200).json({
      success: true,
      message: "success",
      data: token,
    });

    // במידה ובמהלך ניסיון ההרצה של הפונקציה היא נכשלת או נזרקת שגיעה היא תתפס כאן
  } catch (err) {
    res.status(500).json({
      message: "something went wrong",
      error: err.message,
    });
  }
};

const addBookToUser = async (req, res) => {
  try {
    const bookId = await bookModel.findById(req.body._id);
    console.log(bookId);
    const userId = await userModel.findById(req.params.id);
    console.log(userId);
    userId.books.push(bookId);
    await userId.save();
    res.status(200).json({ data: userId });
    res.status(200).json({ data: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};
const showBooks = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      res.status(400).json("user not find");
    }
    user.populate("books").then((user) => {
      console.log(user);
      const books2 = user.books.map((book) => book);
      res.status(200).json({ data: books2 });
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteeUser,
  addBookToUser,
  register,
  logIn,
  showBooks,
};
