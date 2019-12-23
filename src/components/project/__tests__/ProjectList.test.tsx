import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import ProjectLink from '../ProjectLink';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('ProjectLink', () => {
  it('Should display disabled button if href is missing', () => {
    const href = '';
    const text = 'test';
    const { getByText } = renderWithProviders(
      <ProjectLink href={href}>{text}</ProjectLink>,
    );

    const button = getByText(text);

    expect(button.hasAttribute('href')).toBeFalsy();
    expect(button.hasAttribute('target')).toBeFalsy();
  });
  it('Should display correct button', () => {
    const href = 'as';
    const text = 'test';
    const { getByText } = renderWithProviders(
      <ProjectLink href={href}>{text}</ProjectLink>,
    );

    const button = getByText(text);

    expect(button.hasAttribute('href')).toBeTruthy();
    expect(button.hasAttribute('target')).toBeTruthy();
  });
});
