import React from 'react';
import { GithubUser } from '../../interfaces/GithubUser';
import { useTranslation } from 'react-i18next';
import { StyledCard } from '../card/StyledCart';
import styled from '@emotion/styled';
import { StyledHeader } from '../header/header';
import Image from '../image/Image';
import AvatarPlaceholder from './AvatarPlaceholder';

const StyledAvatar = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledContainer = styled(StyledCard)`
  width: 300px;
  padding: ${props => props.theme.space.large}px;
  margin: ${props => props.theme.space.large}px 0
    ${props => props.theme.space.large}px ${props => props.theme.space.large}px;
  ${props => props.theme.mediaQueries.medium} {
    margin: 0;
  }
`;

interface Props {
  githubUser: GithubUser;
}

const GithubAccount: React.FC<Props> = ({ githubUser }) => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledHeader>{t('about:githubAccount')}</StyledHeader>
      <div>{githubUser.login}</div>
      <div>{githubUser.bio}</div>
      <a href={githubUser.url} target="_blank" rel="noopener">
        <StyledAvatar
          src={githubUser.avatarUrl}
          alt="Avatar"
          placeholder={<AvatarPlaceholder />}
        />
      </a>
      {githubUser.email}
    </StyledContainer>
  );
};

export default GithubAccount;
