//@ts-nocheck
import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import TextArea from '../TextArea';
import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const props = {
  name: 'name',
  value: '',
  label: 'label',
  onChange: jest.fn(),
};

describe('TextArea', () => {
  it('Should fire onChange event', () => {
    const value = 'test';
    const onChange = jest.fn();
    const { getByLabelText } = renderWithProviders(
      <TextArea {...props} onChange={onChange} />,
    );

    const textArea = getByLabelText(props.label);
    fireEvent.change(textArea, { target: { value } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
