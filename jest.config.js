module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ],
  automock: false,
  setupFiles: [
    "./tests/setup/setupJest.ts"
  ]
};
