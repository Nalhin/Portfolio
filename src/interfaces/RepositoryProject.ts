export interface RepositoryProject {
  name: string;
  homepageUrl: string;
  description: string;
  url: string;
  primaryLanguage: {
    color: string;
    name: string;
  };
  repositoryTopics: {
    nodes: [{ topic: { name: string } }];
  };
  id: string;
}
