import { isEmpty } from './isEmpty';
import { EmailMessage } from '../interfaces/EmailMessage';

export const isAnyFormFieldEmpty = ({
  email,
  name,
  message,
  subject,
}: EmailMessage) => {
  return (
    isEmpty(email) || isEmpty(name) || isEmpty(message) || isEmpty(subject)
  );
};
