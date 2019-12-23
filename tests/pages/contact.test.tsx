//@ts-nocheck
import { renderWithProviders } from '../utils/renderWithProviders';
import Contact from '../../src/pages/contact';
import { fireEvent } from '@testing-library/dom';
import React from 'react';
import { cleanup } from '@testing-library/react';

const msg = {
  name: 'name',
  email: 'email@gmail.com',
  subject: 'subject',
  message: 'message',
};

afterEach(cleanup);

describe('Contact page', () => {
  it('Should allow sending messages', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const { getByLabelText, getByText } = renderWithProviders(<Contact />);

    const name = getByLabelText('form.name');
    fireEvent.change(name, { target: { value: msg.name, name: 'name' } });

    const email = getByLabelText('form.email');
    fireEvent.change(email, { target: { value: msg.email, name: 'email' } });

    const subject = getByLabelText('form.subject');
    fireEvent.change(subject, {
      target: { value: msg.subject, name: 'subject' },
    });

    const message = getByLabelText('form.message');
    fireEvent.change(message, {
      target: { value: msg.message, name: 'message' },
    });

    const button = getByText('form.send');
    fireEvent.click(button);

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify(msg));
  });
});
