export class MockIntersectionObserver {
  constructor() {}

  observe = () => {
    jest.fn();
  };

  unobserve = () => {
    jest.fn();
  };

  disconnect = () => {
    jest.fn();
  };
}
