/**
 * @format
 */

import {registerRootComponent} from 'expo';
import './declare';
import 'react-native-gesture-handler';
import {TextInput, Text, AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {
  allowFontScaling: false,
};

TextInput.defaultProps = TextInput.defaultProps || {
  allowFontScaling: false,
  autoCorrect: false,
  spellCheck: false,
};
registerRootComponent(App);
AppRegistry.registerComponent(appName, () => App);
