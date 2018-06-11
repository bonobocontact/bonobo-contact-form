require('dotenv').config()
const log = require('../libs/log')(module); 
const mongoose = require('mongoose');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const config = require('../config/env')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user,
    pass: config.password
  }
});

exports.createUser = function (req, res) {

    var user = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        about: req.body.about
      });

    var mailOptions = {
        from: req.body.email,
        to: config.mailto,
        subject: 'Заказ',
        text: user
      };

      try 
      {
        user.save()
  
        try 
        {
          transporter.sendMail(mailOptions)
        } 
  
        catch(error)
        {
          return res.status(500).send("Internal Error Email hasn't been send")
        }
      
        return res.status(200).send("User Saved")

      } 
      
      catch(error) 
      {
        return res.status(500).send("Internal Error")
      }

}