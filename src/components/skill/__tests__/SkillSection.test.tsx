import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import SkillSection from '../SkillSection';
import { skills } from '../../../../tests/fixtures/skills';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('SkillSection', () => {
  it('Should display data correctly', () => {
    const { getByAltText } = renderWithProviders(
      <SkillSection skillSection={skills} />,
    );
    const tech = skills[0].skills[1];
    const icon = getByAltText(`${tech[0].toUpperCase()}${tech.slice(1)}`);

    expect(icon).toBeTruthy();
  });
});
