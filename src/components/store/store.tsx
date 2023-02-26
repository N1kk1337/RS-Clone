import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userAuth from './slices/userAuth';
import users from './slices/users';

const store = configureStore({
  reducer: combineReducers({
    users,
    userAuth,
  }),
  middleware: [
    thunk,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
