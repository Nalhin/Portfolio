import { isBrowser } from '../isBrowser';

describe('isBrowser', () => {
  it('Should be truthy if window is defined', () => {
    expect(isBrowser).toBeTruthy();
  });
});
