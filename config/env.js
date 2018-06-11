require('dotenv').config()
module.exports = {

    'user': process.env.MAIL_USER,
    'password': process.env.MAIL_USER_PASS,
    'mailto' : process.env.MAIL_TO
    
};
