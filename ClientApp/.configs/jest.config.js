const path = require("path");

module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfigFile": "testing-tsconfig.json"
        }
    },
    "rootDir": path.resolve(process.cwd()),
    "verbose": true,
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    "setupFiles": [
        "raf/polyfill",
        path.resolve(process.cwd(), ".configs", "jestsetup.js")
    ],
    "transformIgnorePatterns": [
        "node_modules"
    ],
    "moduleNameMapper": {
        "\\.(css|less)$": "<rootDir>/.configs/stylesMock.js"
    },
    "transform": {
        ".(ts|tsx)": path.resolve(process.cwd(), "node_modules", "ts-jest", "preprocessor.js"),
        "^.+\\.js$": "babel-jest"
    },
    "collectCoverage": false,
    "collectCoverageFrom": [
        "**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/*.d.ts",
        "!**/*.less",
        "!**/index.{ts|tsx}",
        "!**/web_server/**",
        "!**/server/**"
    ],
    "coverageDirectory": path.resolve(process.cwd(), "coverage"),
    "coverageThreshold": {
        "global": {
            "branches": 85,
            "functions": 85,
            "lines": 85,
            "statements": 85
        }
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
}