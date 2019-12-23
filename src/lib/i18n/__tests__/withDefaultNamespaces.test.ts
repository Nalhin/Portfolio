import { withDefaultNamespaces } from '../withDefaultNamespaces';

describe('withDefaultNamespaces', () => {
  it('Should append namespaces correctly', () => {
    const namespaces = ['test', 'test1'];

    expect(withDefaultNamespaces(namespaces)).toContain(namespaces[0]);
    expect(withDefaultNamespaces(namespaces)).toContain(namespaces[1]);
  });
  it('Should return unique namespaces', () => {
    const namespaces = ['test', 'test'];

    expect(withDefaultNamespaces(namespaces)).toContain(namespaces[0]);
    expect(withDefaultNamespaces(namespaces).length).toBe(3);
  });
});
