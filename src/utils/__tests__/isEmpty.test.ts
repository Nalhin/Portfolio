import { isEmpty } from '../isEmpty';

describe('isEmpty', () => {
  it('Should be truthy if field is empty', () => {
    const empty = '   ';

    expect(isEmpty(empty)).toBeTruthy();
  });

  it('Should be falsy if field is not empty', () => {
    const field = 'as';

    expect(isEmpty(field)).toBeFalsy();
  });
});
