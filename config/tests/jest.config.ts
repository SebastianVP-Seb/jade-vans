import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    rootDir: '../../',
    collectCoverage: true,
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        '**/*.{ts, tsx}',
        '!**/node_modules/**' //ignora
    ],
    transformIgnorePatterns: [
        "node_modules",
    ],
    setupFilesAfterEnv: [
        '<rootDir>/config/tests/jest.setup.ts',
    ],
    // transform: {
    //     '^.+\\.ts?$': 'ts-jest',
    //     "^.+\\.(js|jsx)$": "babel-jest"
    // },
    moduleNameMapper: {
        "uuid": require.resolve('uuid'),
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/test/jest/__mocks__/fileMock.js',
      '\\.(css|less|scss)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    }
    // coverageThreshold: {
    //     global: {
    //         branches: 
    //     }
    // }
};

export default config;
