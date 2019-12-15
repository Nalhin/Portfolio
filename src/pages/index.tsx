import { NextPage } from 'next';
import { GithubUser } from '../interfaces/githubUser';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { githubBaseUrl } from '../api/github/baseUrl';
import 'isomorphic-unfetch';
import Icon from '../components/icon/Icon';
import { icons } from '../styles/icons';

interface Props {
  githubUser: GithubUser;
}

const StyledDiv = styled.div`
  background: aquamarine;
  width: 40px;
  height: 40px;
`;

const Home: NextPage<Props> = ({ githubUser }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en').then();
  };

  return (
    <div>
      <div>
        <button type="button" onClick={changeLanguage}>
          {t('changeLanguage')}
        </button>
        <a href={githubUser.html_url}> {githubUser.name}</a>
        <img src={githubUser.avatar_url} alt="github-image" />
        {githubUser.public_repos}
        {githubUser.location}
        <StyledDiv>{githubUser.email}</StyledDiv>
        {Object.keys(icons).map(icon => (
          <Icon name={icons[icon]} key={icon} />
        ))}
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(`${githubBaseUrl}/users/nalhin`);
  const githubUser = await res.json();
  return {
    githubUser,
    namespacesRequired: withDefaultNamespaces(),
  };
};

export default Home;
