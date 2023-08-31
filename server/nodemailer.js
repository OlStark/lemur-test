require("dotenv").config();

const nodemailer = require("nodemailer");

class MailServise {
  transporter = {};
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    // console.log(this.transporter);
  }
  async sendActivationMail() {
    const mailer = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: "starik2932gmail.com",
        pass: "starkova.o.v1",
      },
    });
    console.log("mail send");
    console.log(mailer);
    await mailer.sendMail({
      from: process.env.SMTP_USER,
      to: "kolenvalich@mail.ru",
      subject: "Message from Node js",
      text: "This message was sent from Node js server.",
    });
  }
}

module.exports = new MailServise();
