module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],

    roots: ['./src'],
    testPathIgnorePatterns: ['node_modules'],
    setupFiles: ['<rootDir>/__tests__/setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup-after-env.js'],

    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/src/index.tsx',
        '<rootDir>/src/config.ts'
    ],
    moduleNameMapper: {
        '@root/?(.*)$': '<rootDir>/src/$1',
        '@css/?(.*)$': '<rootDir>/src/css/$1',
        '@lib/?(.*)$': '<rootDir>/src/lib/$1',
        '@img/?(.*)$': '<rootDir>/assets/img/$1',
        '@fonts/?(.*)$': '<rootDir>/assets/fonts/$1',
        '@components/?(.*)$': '<rootDir>/src/components/$1',
        '@storehouse/?(.*)$': '<rootDir>/src/storehouse/$1',
        '@routes/?(.*)$': '<rootDir>/src/components/routes/$1',

        '\\.css$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '\\.css$': 'jest-transform-stub',

        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/assets-transformer.js'
    }
};