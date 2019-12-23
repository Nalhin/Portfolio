import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import Button from '../Button';
import { fireEvent } from '@testing-library/dom';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Button', () => {
  it('Should fire onClick event', () => {
    const onClick = jest.fn();
    const text = 'test';
    const { getByText } = renderWithProviders(
      <Button onClick={onClick}>{text}</Button>,
    );
    const button = getByText(text);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
