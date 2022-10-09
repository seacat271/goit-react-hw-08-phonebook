import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
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
  // blacklist: ['filter'],
}
const rootReducer = combineReducers({contacts: contactSlice.reducer, filter: filterSlice.reducer,})
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  preLoadedState,
});



export const persistor = persistStore(store);

