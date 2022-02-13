const { userModel } = require('../../models/userModel');
const bycrypt = require("bcryptjs");
const nodemailer = require('nodemailer')
const EMAIL = process.env.EMAIL || 'booksNode7@gmail.com';
const PASSWORD = process.env.PASSWORD || "Book1234";
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
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: EMAIL,
                        pass: PASSWORD,
                    },
                });
                let mailOptions = {
                    from: 'booksNode7@gmail.com',
                    to: email,
                    subject: 'Congratulations',
                    html: `
                    <div style="border: 2px solid black;text-align: center;"> 
                   <h1><p>Hey ${firstName}</p></h1> 
                   <p>"Congratulations on registering and wish you a pleasant user experience on the site"</p>         
                    </div>`,
                };
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        console.log(err);;
                    } else {
                        return res.json({ message: `email sent` });
                    }
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
module.exports = { register }