var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// const creds = require('../config/config');

// console.log("We are in postRoutes/index.js /n User/Pass:", `${process.env.MAILUSER} ${process.env.PASS}`)
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  console.log("hitting Post /send route =====<<<<<");
  console.log("req.body: ", req.body);
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'ed2code@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;