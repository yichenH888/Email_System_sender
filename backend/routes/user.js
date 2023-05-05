const express = require('express');
const nodemailer = require('nodemailer');
const connection = require('../connection');
const router = express.Router();
// create reusable transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'orayichenhuang@gmail.com',
        pass: 'fyfftipelcihkhuk'
    }
});
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
router.post('/email',(req,res) => {
    let user = req.body;
    if(!isValidEmail(user.email)){//invalid email address
        return res.status(200).json({message:"Invalid Email Address, please enter again"});
    }else if(user.name == ""){//empty name
        return res.status(200).json({message:"Empty Name, please enter again"});
    }
    query = "select email from user where email =?"
    connection.query(query,[user.email],(err,result) => {
    if(!err){
        if(result.length <= 0){
            query = "insert into user(name,email) values (?,?)"
            connection.query(query,[user.name,user.email],(err,results)=>{
                if(!err){//store email successfully and send confirmation email
                    return res.status(200).json({message:"Successfully Store Name and Email, confirmation email sent"});
                }
                else{//error in storing email
                    return res.status(500).json(err);
                }
            })
        }
        else{//email already exists, but still send confirmation email
            return res.status(200).json({message:"Email already exists, but we will still send you a confirmation email"});
        }
    }
    else{//error in checking email
        return res.status(500).json(err);
    }
    

});


let mailOptions = {
    from: 'orayichenhuang@gmail.com', // sender address
    to: user.email, // list of receivers
    subject: 'Confirmation From Email system sender', // Subject line
    text: `User created with name: ${user.name}, and email address: ${user.email}`, // plain text body
};


// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

});

module.exports = router;