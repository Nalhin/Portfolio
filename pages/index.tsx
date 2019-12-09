import { NextPage } from 'next';
import { GithubUser } from '../interface/githubUser';
import fetch from 'isomorphic-fetch';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  githubUser: GithubUser;
}

const Home: NextPage<Props> = ({ githubUser }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
  };

  return (
    <div>
      <div>
        <button type="button" onClick={changeLanguage}>
          {t('change-locale')}
        </button>
        <a href={githubUser.html_url}> {githubUser.name}</a>
        <img src={githubUser.avatar_url} alt="github-image" />
        {githubUser.public_repos}
        {githubUser.location}
        {githubUser.email}
      </div>
    </div>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/users/nalhin');
  const data = await res.json();

  return {
    githubUser: data,
  };
};

export default Home;
