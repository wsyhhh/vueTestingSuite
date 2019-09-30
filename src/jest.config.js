// jest.config.js
module.exports = {
  verbose: true,
  rootDir: "/tmp/example",
  reporters: ["jest-standard-reporter"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  coverageDirectory: "/tmp/example",
  modulePaths: [
    "<rootDir>"
  ],
  moduleDirectories: [
    "/tmp/example/node_modules"
  ],
};
