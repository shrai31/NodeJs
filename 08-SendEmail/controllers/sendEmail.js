const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'geoffrey.kessler@ethereal.email',
      pass: 'K1um6jKMgAfWtbJ1J8',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Himanshu Rai" <shrai31@example.com>', // sender address
    to: 'baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello Baz?', // plain text body
    html: '<h2>Sending email with nodejs</h2>', // html body
  });
  res.json(info);
};

module.exports = sendEmail;
