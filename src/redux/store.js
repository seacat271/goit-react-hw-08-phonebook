import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/AuthSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const preLoadedState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  }, 
  filter: '',
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistedReducer,
  },
  middleware,
  preLoadedState,
});



export const persistor = persistStore(store);

