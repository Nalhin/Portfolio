import React from 'react';
import { GithubUser } from '../../interfaces/GithubUser';
import { useTranslation } from 'react-i18next';
import { StyledCard } from '../card/StyledCart';
import styled from '@emotion/styled';

const StyledAvatar = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;

interface Props {
  githubUser: GithubUser;
}

const GithubAccount: React.FC<Props> = ({ githubUser }) => {
  const { t } = useTranslation();

  return (
    <StyledCard>
      <h1>{t('about:githubAccount')}</h1>
      <div>{githubUser.login}</div>
      <div>{githubUser.bio}</div>
      <a href={githubUser.url} target="_blank" rel="noopener">
        <StyledAvatar src={githubUser.avatarUrl} alt="Avatar" />
      </a>
      {githubUser.email}
    </StyledCard>
  );
};

export default GithubAccount;
