import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import Project from '../Project';
import { mockProject } from '../../../../tests/fixtures/project';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Project', () => {
  it('Should display data correctly', () => {
    const { getByText, getByAltText } = renderWithProviders(
      <Project project={mockProject} />,
    );

    const title = getByText(mockProject.name);
    const tech = mockProject.repositoryTopics.nodes[0].topic.name;
    const icon = getByAltText(`${tech[0].toUpperCase()}${tech.slice(1)}`);

    expect(title).toBeTruthy();
    expect(icon).toBeTruthy();
  });
});
