import { NextPage } from 'next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import 'isomorphic-unfetch';
import Icon from '../components/icon/Icon';
import { icons } from '../styles/icons';
import { useQuery } from '@apollo/react-hooks';
import { getUser } from '../lib/graphql/queries/getUser';
import {GithubUser} from "../interfaces/GithubUser";

interface Props {
  // githubUser: GithubUser;
}

const StyledDiv = styled.div`
  background: aquamarine;
  width: 40px;
  height: 40px;
`;

type Response = {
  user: GithubUser;
};

type InputProps = {
  userLogin: string;
};

const Home: NextPage<Props> = () => {
  const { t, i18n } = useTranslation();

  const { loading, data, error } = useQuery<Response, InputProps>(getUser, {
    variables: { userLogin: 'Nalhin' },
  });

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en').then();
  };

  if (loading) {
    return <div />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <button type="button" onClick={changeLanguage}>
        {t('changeLanguage')}
      </button>
      <a href={data?.user.url}> {}</a>
      <img src={data?.user.avatarUrl} alt="github-image" />
      {data?.user.bio}
      {data?.user.company}
      <StyledDiv>{data?.user.email}</StyledDiv>
      {Object.keys(icons).map(icon => (
        <Icon name={icons[icon].name} key={icon} />
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(),
  };
};

export default Home;
