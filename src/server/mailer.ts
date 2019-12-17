import { myEmail } from '../constants/email';
import { EmailMessage } from '../interfaces/EmailMessage';
const sendmail = require('sendmail')();

export const sendEmail = ({ email, name, subject, message }: EmailMessage) => {
  const mailOptions = {
    from: `${name} <${email}>`,
    to: myEmail,
    subject,
    text: message,
  };

  return new Promise((resolve, reject) => {
    sendmail(mailOptions, (error: any, info: any) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};
