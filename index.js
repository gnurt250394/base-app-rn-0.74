/**
 * @format
 */

import {registerRootComponent} from 'expo';
import './declare';
import 'react-native-gesture-handler';
import {TextInput, Text} from 'react-native';
import App from './src/App';
Text.defaultProps = Text.defaultProps || {
  allowFontScaling: false,
};

TextInput.defaultProps = TextInput.defaultProps || {
  allowFontScaling: false,
  autoCorrect: false,
  spellCheck: false,
};
registerRootComponent(App);
