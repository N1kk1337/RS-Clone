import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userAuth from './slices/userAuth';
import users from './slices/users';
import filterParams from './slices/filterParams';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    users,
    userAuth,
    filterParams,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    thunk,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
