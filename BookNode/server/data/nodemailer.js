const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});
let mailOptions = {
    from: 'TEST@gmail.com',
    to: req.body.email,
    subject:'Congratulations',
    html: `
    <div> 
   <h1><p >Hello:${req.body.firstName}</p></h1>          
    </div>`,
};
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    } else {
        return res.json({ message: `email sent` });
    }
});