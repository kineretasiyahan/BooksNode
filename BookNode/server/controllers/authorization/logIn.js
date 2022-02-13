const { userModel } = require('../../models/userModel')
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const SECRET_KEY = process.env.SECRET_KEY || "booksNode2021" ;

const logIn = async (req, res) => {
    // בודקים שהסיסמה והאיימל שקיבלנו מהקליינט כן קיימים
    const { email, password } = req.body.user;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "there is error with email or password.",
            error: "email and password is required ",
        });
    }
    // מתחילים ניסוי של מציאת משתמש על פי הנתונים מהקליינט ומגבים בהתאם
    try {
        // מנסים למצוא משתמש לפי איימל
        const user = await userModel.findOne({ email });
        // console.log(req)
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
                message: "Incorrect password",
                errors: { password: "Incorrect password" },
                data:null
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
            זה יעזור לנו לוודא שאכן הבקשות שנשלחות מהקליינט אכן אמינות
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
module.exports = { logIn }