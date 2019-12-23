import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import { fireEvent } from '@testing-library/dom';
import React from 'react';
import Input from '../Input';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const props = {
  name: 'name',
  value: '',
  label: 'label',
  onChange: jest.fn(),
};

describe('Input', () => {
  it('Should fire onChange event', () => {
    const value = 'test';
    const onChange = jest.fn();
    const { getByLabelText } = renderWithProviders(
      <Input {...props} onChange={onChange} />,
    );

    const input = getByLabelText(props.label);
    fireEvent.change(input, { target: { value } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
