const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fd06aadd5bf10c",
      pass: "14d57d3c43e7f3"
    }
  });

const mailOptions = {
  from: 'email@gmail.com',
  to: 'recipient_email@example.com',
  subject: 'Temat wiadomości',
  text: 'Treść wiadomości'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail wysłany: ' + info.response);
  }
});
