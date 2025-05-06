const jestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.js',
    '\\.module\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default jestConfig;
