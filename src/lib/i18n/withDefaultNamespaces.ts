export const withDefaultNamespaces = (namespaces: string[] = []) =>
  Array.from(new Set(['common', '_error', ...namespaces]));
