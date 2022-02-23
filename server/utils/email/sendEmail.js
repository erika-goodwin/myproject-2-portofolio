const nodemailer = require("nodemailer");

const res = require("express/lib/response");

const sendEmail = async (name, email, subject, message) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  const options = () => {
    return {
      from: `"${name}"<${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject,
      text: `${message}`,
      html: `
    <h3>Email from your homepage</h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
    </ul>
    <h2>Subject: ${subject}</h2>
    <p>Message: ${message}</p>
    
    `,
    };
  };
  console.log("SENDING EMAIL ... ", options);

  transporter.sendMail(options(), (error, info) => {
    if (error) {
      return error;
    } else {
      return res.status(200).json({ success: true });
    }
  });
};

module.exports = sendEmail;
