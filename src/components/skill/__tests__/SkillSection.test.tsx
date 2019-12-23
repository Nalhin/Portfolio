import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import SkillSection from '../SkillSection';
import { mockSkills } from '../../../../tests/fixtures/mockSkills';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('SkillSection', () => {
  it('Should display data correctly', () => {
    const { getByAltText } = renderWithProviders(
      <SkillSection skillSection={mockSkills} />,
    );
    const tech = mockSkills[0].skills[1];
    const icon = getByAltText(`${tech[0].toUpperCase()}${tech.slice(1)}`);

    expect(icon).toBeTruthy();
  });
});
