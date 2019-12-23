import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import CommitCard from '../CommitCard';
import { mockCommit } from '../../../../tests/fixtures/commit';
import React from 'react';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('CommitCard', () => {
  it('Should display correct data', () => {
    const { getByText } = renderWithProviders(
      <CommitCard commit={mockCommit} />,
    );

    expect(getByText(mockCommit.message)).toBeTruthy();
    expect(getByText(mockCommit.repositoryName)).toBeTruthy();
  });
});
