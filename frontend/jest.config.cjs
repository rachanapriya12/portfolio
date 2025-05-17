module.exports = {
testEnvironment: "jsdom",
transform: {
"^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
},
moduleNameMapper: {
"\\.(css|scss)$": "identity-obj-proxy",
"^@/(.*)$": "<rootDir>/src/$1"
},
setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
transformIgnorePatterns: [
"/node_modules/(?!(react-icons|framer-motion|react-intersection-observer)/)"
],
testPathIgnorePatterns: [
"/node_modules/",
"/.next/"
],
moduleDirectories: ["node_modules", "src"],
verbose: true
};
