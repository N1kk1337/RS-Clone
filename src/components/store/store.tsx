import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userAuth from './slices/userAuth';
import users from './slices/users';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    users,
    userAuth,
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
