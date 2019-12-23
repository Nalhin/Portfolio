module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ],
  automock: false,
  snapshotSerializers: ['jest-emotion'],
  setupFiles: [
    "./tests/setup/setupJest.ts"
  ]
};
