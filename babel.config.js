module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['src'],
          extensions: ['.tsx', 'json', '.ts', '.js'],
          alias: {
            '@assets/*': './src/assets/*',
            '@common/*': './src/common/*',
            '@app-emitter': './src/common/emitter/index',
            '@app-firebase': './src/common/firebase/index',
            '@hooks': './src/common/hooks/index',
            '@validate/*': './src/common/zod-validate/*',
            '@listener': './src/common/redux/listener.ts',
            '@animated': './src/common/animated/index',
            '@screens/*': 'src/screens/*',
            '@rn-core': 'src/components/core/index',
            '@components/*': './src/components/*',
            '@utils/*': './src/utils/*',
            '@storage': './src/assets/storage/index',
            '@network': './src/network/index',
            '@networking/*': './src/network/*',
            '@model/*': './src/model/*',
            '@navigation/*': './src/navigation/*',
            '@store/*': './src/redux/store/*',
            '@redux-slice': './src/redux/action-slice/index',
            '@redux-selector/*': './src/redux/selector/*',
            '@redux-action-type/*': './src/redux/action-type/*',
            '@theme': './src/assets/themes/index',
            '@theme/*': './src/assets/themes/*',
          },
        },
      ],
    ],
  };
};
