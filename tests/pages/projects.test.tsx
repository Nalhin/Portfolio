import { renderWithProviders } from '../utils/renderWithProviders';
import Projects from '../../src/pages/projects';
import { MockedProvider } from '@apollo/react-testing';
import { getRepositoriesById } from '../../src/lib/graphql/queries/getRepositories';
import { projectIds } from '../../src/constants/displayedProjects';
import { cleanup } from '@testing-library/react';
import React from 'react';
import { mockProject, projectWithTypenames } from '../fixtures/project';

const mocks = [
  {
    request: {
      query: getRepositoriesById,
      variables: {
        id: projectIds,
      },
    },
    result: {
      data: projectWithTypenames,
    },
  },
];

afterEach(cleanup);

describe('Projects page', () => {
  it('Should display loading placeholder', async () => {
    const { queryByText, getAllByTestId } = renderWithProviders(
      <MockedProvider mocks={mocks}>
        <Projects />
      </MockedProvider>,
    );

    const project = queryByText(mockProject.name);
    const placeholder = getAllByTestId('project__placeholder');

    expect(project).toBeFalsy();
    expect(placeholder[0]).toBeTruthy();
  });

  it('Should display projects', async () => {
    const { findByText } = renderWithProviders(
      <MockedProvider mocks={mocks}>
        <Projects />
      </MockedProvider>,
    );

    const project = await findByText(mockProject.name);

    expect(project).toBeTruthy();
  });
});
