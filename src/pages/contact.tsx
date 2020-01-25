import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import { EmailMessage } from '../interfaces/EmailMessage';
import { myEmail } from '../constants/email';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import TextArea from '../components/textArea/TextArea';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { isAnyFormFieldEmpty } from '../utils/isFormFieldEmpty';
import { isEmailValid } from '../utils/isEmailValid';
import Card from '../components/card/Card';
import { CardHeader } from '../components/card/CardHeader';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  margin-top: ${props => props.theme.space.large}px;
  width: 90%;
  max-width: ${props => props.theme.space.large * 2 + 300}px;
`;

const StyledContainer = styled.div`
  padding: ${props => props.theme.space.large}px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledError = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.error};
  padding-top: ${props => props.theme.space.medium}px;
  height: 1em;
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
  const [error, setError] = React.useState('');
  const [formState, setFormState] = React.useState<EmailMessage>(
    DEFAULT_CONTACT_FORM_STATE,
  );

  const { t } = useTranslation();
  const theme = useTheme();

  const changeFormValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    if (error) {
      setError('');
    }
  };

  const handleFormSubmit = async () => {
    if (isAnyFormFieldEmpty(formState)) {
      setError('contact:formFieldEmpty');
      return;
    }

    if (!isEmailValid(formState.email)) {
      setError('contact:invalidEmail');
      return;
    }

    setFormState(DEFAULT_CONTACT_FORM_STATE);

    try {
      const message = await fetchSendEmail(formState);

      if (message.status > 300) {
        throw new Error();
      }
    } catch (e) {
      setError('contact:serverError');
    }
  };

  return (
    <StyledCard
      theme={theme}
      header={<CardHeader>{t('contact:contactHeader')}</CardHeader>}
    >
      <StyledContainer theme={theme}>
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
        <StyledError theme={theme}>{t(error)}</StyledError>
        <StyledLink theme={theme} href={`mailto: ${myEmail}`}>
          {t('contact:directContact')}
        </StyledLink>
      </StyledContainer>
    </StyledCard>
  );
};

Contact.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['contact']),
  };
};

export default Contact;
