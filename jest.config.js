module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest', // This ensures that Jest uses Babel to transform JS/JSX files
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-navigation|@react-native|react-native-reanimated)/)", // To transform some node_modules (if needed)
  ],
};
