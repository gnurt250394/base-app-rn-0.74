import React, {ReactNode, Suspense, useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {I18nextProvider} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider as RNKeyboardProvider} from 'react-native-keyboard-controller';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {PortalProvider} from '@gorhom/portal';
import {AppContainer} from '@navigation/app-navigation';
import {persistore, store} from '@store/store';
import {useLoadFont} from '@theme/typography';
import I18n from '@assets/i18n/i18n';
import '@assets/themes/index';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const KeyboardProvider = ({children}: {children?: ReactNode}) => {
  // state
  const [loading, setLoading] = useState<boolean>(true);

  // effect
  useEffect(() => {
    queueMicrotask(() => {
      setLoading(false);
    });
  }, []);

  // render
  return (
    <>
      {loading ? null : (
        <RNKeyboardProvider statusBarTranslucent navigationBarTranslucent>
          {children}
        </RNKeyboardProvider>
      )}
    </>
  );
};

const MyApp = () => {
  // state
  const isLoaded = useLoadFont();

  if (!isLoaded) {
    return null;
  }

  // render
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} />
      <KeyboardProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistore}>
            <I18nextProvider i18n={I18n}>
              <Suspense fallback={null}>
                <PortalProvider>
                  <GestureHandlerRootView style={styles.root}>
                    <AppContainer />
                  </GestureHandlerRootView>
                </PortalProvider>
              </Suspense>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};
export default MyApp;
