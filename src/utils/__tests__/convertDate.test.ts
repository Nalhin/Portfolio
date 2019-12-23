import { convertDate } from "../convertDate";

describe('convertDate', () => {
  it('Should be truthy if field is empty', () => {
    const date = '2019-12-23T02:17:33Z';
    const expected = '12/23/2019 2:17';

    expect(convertDate(date)).toEqual(expected);
  });
});
