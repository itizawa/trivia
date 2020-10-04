module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
