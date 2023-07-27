module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/test/**',
    '!src/common/enums/**',
    '!src/common/types/**',
    '!src/common/utils-ts/**',
    '!src/common/configs/**',
    '!src/configs/**',
    '!src/i18n/**',
    '!src/store/**',
    '!src/features/api/**',
    '!src/features/routes.tsx',
    '!src/features/navigationConfigs.tsx',
    '!src/features/**/routes.tsx',
    '!src/features/**/navigationConfigs.tsx',
    '!src/auth/msal/**',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'report', outputName: 'TEST-results.xml' },
    ],
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/jest/fileTransform.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [],
  transformIgnorePatterns: [
    // Handle React Dnd and UUID
    '/node_modules/(?!react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend|uuid)',
    // Handle css module
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Handle css module
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    // Mock style for css, scss
    '\\.(css|less|sass|scss)$': '<rootDir>/jest/styleMock.js',
  },
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  resetMocks: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
