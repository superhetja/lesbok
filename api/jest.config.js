module.exports = {
	// preset: '../../../jest.preset.js',
	coverageDirectory: '../coverage',
	// globalSetup: './test/globalSetup.ts',
	// globalTeardown: './test/globalTeardown.ts',
	moduleFileExtensions: ['ts', 'js', 'html', 'json'],
	rootDir: '.',
	testRegex: '.*\\.spec.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
	collectCoverageFrom: ['**/*.(t|j)s'],
	// globals: {
	// 	'ts-jest': {
	// 		tsConfig: '<rootDir>/tsconfig.spec.json',
	// 	},
	// },
	// displayName: 'financial-aid-backend',
	testEnvironment: 'node',
};
