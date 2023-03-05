import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { persistReducer, persistStore } from 'redux-persist';

// import { apiSlice } from '../service/api-slice';
import settingsReducer from './slices/settings-slice';

const persistedSettingsReducer = persistReducer({ key: 'settings', version: 1, storage: AsyncStorage }, settingsReducer);
// const persistedAuthReducer = persistReducer({ key: 'auth', version: 1, storage: AsyncStorage });

const rootReducer = combineReducers({
  settings: persistedSettingsReducer,
  //   [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
