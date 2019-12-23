import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import CommitHistory from '../CommitHistory';
import { mockCommit } from '../../../../tests/fixtures/commit';
import { cleanup } from '@testing-library/react';

const props = {
  commits: [mockCommit],
  loading: false,
};

afterEach(cleanup);

describe('CommitCard', () => {
  it('Should display commits without placeholder', () => {
    const { queryAllByTestId, getByText } = renderWithProviders(
      <CommitHistory {...props} loading={false} />,
    );

    const placeholder = queryAllByTestId('commit__placeholder');
    const commit = getByText(mockCommit.message);

    expect(placeholder[0]).toBeFalsy();
    expect(commit).toBeTruthy();
  });
  it('Should display loading placeholder', () => {
    const { queryAllByTestId, queryByText } = renderWithProviders(
      <CommitHistory {...props} loading={true} />,
    );

    const placeholder = queryAllByTestId('commit__placeholder');
    const commit = queryByText(mockCommit.message);

    expect(placeholder[0]).toBeTruthy();
    expect(commit).toBeFalsy();
  });
});
