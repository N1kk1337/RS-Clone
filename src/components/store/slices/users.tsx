import {
  createSlice, Dispatch,
} from '@reduxjs/toolkit';
import { fetchUsersInfo } from '../../../api/users';
import { User } from '../../types';

interface UsersState {
  data: User[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UsersState = {
  data: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteAllUsersState: (state) => {
      state.data = [];
    },
    deleteAllErrorsState: (state: UsersState) => {
      console.log(state);
    },
    addUserState: (state: UsersState, { payload }) => {
      state.data = [...state.data, payload];
    },
    updateFirstUserState: (state: UsersState, { payload }) => {
      state.data = [payload, ...state.data.splice(1, state.data.length)];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsersInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersInfo.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsersInfo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const {
  deleteAllUsersState,
  deleteAllErrorsState,
  addUserState,
  updateFirstUserState,
} = slice.actions;

export const deleteAllUsers = () => async (dispatch: Dispatch) => {
  dispatch(deleteAllUsersState());
};

export const deleteAllErrors = () => async (dispatch: Dispatch) => {
  dispatch(deleteAllErrorsState());
};

export const addUser = (payload: User) => async (dispatch: Dispatch) => {
  dispatch(addUserState(payload));
};

export const updateFirstUser = (payload: User) => async (dispatch: Dispatch) => {
  dispatch(updateFirstUserState(payload));
};

export default slice.reducer;
