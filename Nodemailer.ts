import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.SENDERPASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
export { transporter };
