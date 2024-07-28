import {appReducer, authenticationReducer} from '@redux-slice';
import {combineReducers} from '@reduxjs/toolkit';

import {persistReducer} from 'redux-persist';
import {reduxPersistStorage} from '../../assets/storage';

const persistedReducer = persistReducer(
  {key: 'root', storage: reduxPersistStorage},
  authenticationReducer,
);
export const allReducer = combineReducers({
  app: appReducer,
  authentication: persistedReducer,
});

export type RootState = ReturnType<typeof allReducer>;
