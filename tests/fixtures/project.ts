export const mockProject = {
  description: 'description',
  homepageUrl: 'url',
  id: 'id',
  name: 'name',
  primaryLanguage: {
    name: 'JavaScript',
    color: '#f1e05a',
  },
  repositoryTopics: { nodes: [{ topic: { name: 'javascript' } }] },
  url: 'url',
};

export const projectWithTypenames = {
  nodes: [
    {
      ...mockProject,
      __typename: 'Repository',
      primaryLanguage: {
        ...mockProject.primaryLanguage,
        __typename: 'Language',
      },
      repositoryTopics: {
        nodes: [
          {
            topic: {
              ...mockProject.repositoryTopics.nodes[0].topic,
              __typename: 'Topic',
            },
            __typename: 'RepositoryTopic',
          },
        ],
        __typename: 'RepositoryTopicConnection',
      },
    },
  ],
};
