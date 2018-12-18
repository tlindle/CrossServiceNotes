module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/server.js',
    'src/util/logger.js'
  ],
  coverageReporters: [
    'text',
    'lcov'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testEnvironment: 'node',
  testMatch: [
    '**/**/*UnitTest.js'
  ]
};