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
    nodes: Topic[];
  };
  id: string;
}

interface Topic {
  topic: { name: string };
}
