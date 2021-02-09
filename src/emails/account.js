const sgMail = require("@sendgrid/mail");
require("dotenv").config({ path: "test./config/.env" });


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail
//   .send({
//     to: "fabricioleonelpalavecino@gmail.com",
//     from: "fabricioleonelpalavecino@gmail.com",
//     text: "I hope this work",
//     subject: "Test",
//   })
//   .then(()=>{console.log('Send successfully')})
//   .catch((error) => console.log(error));

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "fabricioleonelpalavecino@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "fabricioleonelpalavecino@gmail.com",
    subject: "Goodbye",
    text: `Goodbye ${name}, I hope to see you back soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
