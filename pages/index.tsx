import { NextPage } from 'next';
import { GithubUser } from '../interface/githubUser';
import fetch from 'isomorphic-fetch';

interface Props {
  githubUser: GithubUser;
}

const Home: NextPage<Props> = ({ githubUser }) => {
  return (
    <div>
      <div>
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
