import { isAnyFormFieldEmpty } from '../isFormFieldEmpty';

describe('isEmpty', () => {
  it('Should be truthy if form has empty fields', () => {
    const form = {
      email: '    ',
      name: '   ',
      message: 'as',
      subject: 'asda',
    };

    expect(isAnyFormFieldEmpty(form)).toBeTruthy();
  });

  it('Should be falsy if form does not have empty fields', () => {
    const form = {
      email: '   a ',
      name: ' a  ',
      message: 'as',
      subject: 'asda',
    };

    expect(isAnyFormFieldEmpty(form)).toBeFalsy();
  });
});
