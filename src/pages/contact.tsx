import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import { EmailMessage } from '../interfaces/EmailMessage';
import { myEmail } from '../constants/email';
import styled from '../styles/styled';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import { Theme } from '../styles/theme';
import { useTheme } from 'emotion-theming';
import TextArea from '../components/textArea/TextArea';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const StyledLink = styled.a`
  padding-top: ${props => props.theme.space.medium}px;
`;

const Contact = () => {
  const [isError, setIsError] = React.useState();
  const [formState, setFormState] = React.useState<EmailMessage>(
    DEFAULT_CONTACT_FORM_STATE,
  );

  const { t } = useTranslation();
  const theme = useTheme<Theme>();

  const changeFormValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    if (isError) {
      setIsError(false);
    }
  };

  const handleFormSubmit = async () => {
    setFormState(DEFAULT_CONTACT_FORM_STATE);

    try {
      const message = await fetchSendEmail(formState);

      if (message.status > 300) {
        throw new Error();
      }
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <StyledContainer>
      <h1>{t('contact:contactHeader')}</h1>
      <StyledForm>
        <Input
          onChange={changeFormValue}
          value={formState.name}
          name="name"
          label={t('contact:form.name')}
        />
        <Input
          onChange={changeFormValue}
          value={formState.email}
          name="email"
          label={t('contact:form.email')}
        />
        <Input
          onChange={changeFormValue}
          value={formState.subject}
          name="subject"
          label={t('contact:form.subject')}
        />
        <TextArea
          onChange={changeFormValue}
          value={formState.message}
          name="message"
          label={t('contact:form.message')}
        />
      </StyledForm>
      <Button onClick={handleFormSubmit}>{t('contact:form.send')}</Button>
      <StyledLink theme={theme} href={`mailto: ${myEmail}`}>
        {t('contact:direct-email')}
      </StyledLink>
      {isError && <span>{t('_error:error-message')}</span>}
    </StyledContainer>
  );
};

Contact.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['contact']),
  };
};

export default Contact;
