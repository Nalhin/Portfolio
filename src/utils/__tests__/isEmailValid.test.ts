import { isEmailValid } from '../isEmailValid';

describe('isEmailValid', () => {
  it('Should be truthy if email is valid', () => {
    const firstEmail = 'xd@wp.pl';
    const secondEmail = '123@gmail.com';

    expect(isEmailValid(firstEmail)).toBeTruthy();
    expect(isEmailValid(secondEmail)).toBeTruthy();
  });

  it('Should be falsy if email is invalid', () => {
    const firstEmail = 'xd@wp.p';
    const secondEmail = '123.dsa.@gail.com';

    expect(isEmailValid(firstEmail)).toBeFalsy();
    expect(isEmailValid(secondEmail)).toBeFalsy();
  });
});
