import { convertDate } from '../convertDate';

describe('convertDate', () => {
  it('Should be truthy if field is empty', () => {
    const date = '2019-12-23T02:17:33Z';
    const expected = '1 month ago';

    expect(convertDate(date)).toEqual(expected);
  });
});
