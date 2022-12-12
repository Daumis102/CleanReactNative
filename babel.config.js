module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@testing': './src/testing',
          '@App': './src/App',
        },
      },
    ],
  ],
};
