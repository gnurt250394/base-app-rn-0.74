const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (platform === 'web') {
        if (moduleName.endsWith('BaseViewConfig')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('RCTNetworking')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (
          moduleName.endsWith(
            '../Components/AccessibilityInfo/legacySendAccessibilityEvent',
          )
        ) {
          return {
            filePath: require.resolve(
              'react-native-web/dist/exports/AccessibilityInfo',
            ),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('./PlatformColorValueTypes')) {
          return {
            filePath: require.resolve(
              'react-native-web/dist/exports/StyleSheet',
            ),
            type: 'sourceFile',
          };
        }

        if (moduleName.endsWith('./RCTAlertManager')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('../Image/Image')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('DevToolsSettings/DevToolsSettingsManager')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('Utilities/BackHandler')) {
          return {
            filePath: require.resolve('identity-obj-proxy'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('./Utilities/BackHandler')) {
          return {
            filePath: require.resolve(
              'react-native-web/dist/exports/Utilities/BackHandler',
            ),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('./Utilities/Platform')) {
          return {
            filePath: require.resolve('react-native-web/dist/exports/Platform'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('../../Utilities/Platform')) {
          return {
            filePath: require.resolve('react-native-web/dist/exports/Platform'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('../../../../Libraries/Utilities/Platform')) {
          return {
            filePath: require.resolve('react-native-web/dist/exports/Platform'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('./Platform')) {
          return {
            filePath: require.resolve('react-native-web/dist/exports/Platform'),
            type: 'sourceFile',
          };
        }
        if (moduleName.endsWith('./StyleSheet/PlatformColorValueTypes')) {
          return {
            filePath: require.resolve(
              'react-native-web/dist/exports/StyleSheet',
            ),
            type: 'sourceFile',
          };
        }
        // Logic to resolve the module name to a file path...
        // NOTE: Throw an error if there is no resolution.
      }
      // Optionally, chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
