module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/lib/**',
    '!src/server/**',
    '!src/interfaces/**',
  ],
  automock: false,
  snapshotSerializers: ['jest-emotion'],
  setupFiles: ['./tests/setup/setupJest.ts'],
};
