import { Commit } from '../interfaces/Commit';

export const extractCommits = (data: any): Commit[] => {
  const commits: any = [];

  data?.user.repositories.nodes.forEach((repo: any) => {
    repo.refs.edges.forEach((ref: any) =>
      ref.node.target.history.edges.forEach((commit: any) => {
        const { committedDate, message, url } = commit.node;
        const languages = repo.languages.nodes.map((language: any) =>
          language.name.toLowerCase(),
        );
        commits.push({
          committedDate,
          message,
          languages: languages,
          repositoryName: repo.name,
          repositoryUrl: repo.url,
          url,
        });
      }),
    );
  });
  commits.sort(
    (a: any, b: any) => -a.committedDate.localeCompare(b.committedDate),
  );
  return commits.slice(0, 15);
};
