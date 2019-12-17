import { myEmail } from '../constants/email';
import { EmailMessage } from '../interfaces/EmailMessage';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
});

export const sendEmail = ({ email, name, subject, message }: EmailMessage) => {
  const mailOptions = {
    from: `${name} <${email}>`,
    to: myEmail,
    subject,
    text: message,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};
