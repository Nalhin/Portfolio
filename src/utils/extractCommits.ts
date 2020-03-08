import { Commit } from '../interfaces/Commit';
import { githubUserLogin } from '../constants/githubUserLogin';

export const extractCommits = (data: any): Commit[] => {
  const commits: any = [];
  const ids: any = {};

  data?.user.repositories.nodes.forEach((repo: any) => {
    repo.refs.edges.forEach((ref: any) =>
      ref.node.target.history.edges.forEach((commit: any) => {
        const { committedDate, message, url } = commit.node;
        const languages = repo.languages.nodes.map((language: any) =>
          language.name.toLowerCase(),
        );

        const { author, committer, id } = commit.node;
        if (
          !ids[id] &&
          ((author.user && author.user.login === githubUserLogin) ||
            (committer.user && committer.user.login === githubUserLogin))
        ) {
          ids[id] = true;
          commits.push({
            committedDate,
            message,
            languages: languages,
            repositoryName: repo.name,
            repositoryUrl: repo.url,
            url,
            id,
          });
        }
      }),
    );
  });
  commits.sort(
    (a: any, b: any) => -a.committedDate.localeCompare(b.committedDate),
  );
  return commits.slice(0, 10);
};
