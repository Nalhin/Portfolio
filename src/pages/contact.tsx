import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { EmailMessage } from '../interfaces/EmailMessage';
import { myEmail } from '../constants/email';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const fetchSendEmail = (data: EmailMessage) =>
  fetch('/api/contact', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

const DEFAULT_CONTACT_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formState, setFormState] = React.useState<EmailMessage>(
    DEFAULT_CONTACT_FORM_STATE,
  );

  const { t } = useTranslation();

  const changeFormValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async () => {
    await fetchSendEmail(formState);
    setFormState(DEFAULT_CONTACT_FORM_STATE);
  };

  return (
    <div>
      <h1>{t('contact:contactHeader')}</h1>
      <StyledForm>
        <label>{t('contact:form.name')}</label>
        <input onChange={changeFormValue} value={formState.name} name="name" />
        <label>{t('contact:form.email')}</label>
        <input
          onChange={changeFormValue}
          value={formState.email}
          name="email"
        />
        <label>{t('contact:form.subject')}</label>
        <input
          onChange={changeFormValue}
          value={formState.subject}
          name="subject"
        />
        <label>{t('contact:form.message')}</label>
        <textarea
          onChange={changeFormValue}
          value={formState.message}
          name="message"
        />
      </StyledForm>
      <button onClick={handleFormSubmit}>{t('contact:form.send')}</button>
      <a href={`mailto: ${myEmail}`}>{t('contact:direct-email')}</a>
    </div>
  );
};

Contact.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['contact']),
  };
};

export default Contact;
