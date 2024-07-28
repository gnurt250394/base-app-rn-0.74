import {configureStore} from '@reduxjs/toolkit';
import {allReducer} from '@store/all-reducers';

import {listenerMiddleware} from '../listener';

import {persistStore} from 'redux-persist';

const devMode = __DEV__;

const middleware = [] as any[];

export const store = configureStore({
  reducer: allReducer,
  devTools: devMode,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
      .prepend(listenerMiddleware.middleware)
      .concat(middleware),
});

export const persistore = persistStore(store);
