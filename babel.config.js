module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // Add this section to make sure Babel handles the transformation for Jest
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};
