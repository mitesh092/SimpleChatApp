import nodemailer from "nodemailer";
// utils/mailSender.js

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'reachtome404@gmail.com ',
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log("I am error ", error.message);
  }
};

export default mailSender;