import {
  createSlice, Dispatch,
} from '@reduxjs/toolkit';
import { fetchUsersInfo, IUpDateUser } from '../../../api/users';
import { IUser } from '../../type';

interface IUsersState {
  data: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: IUsersState = {
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
    deleteAllErrorsState: (state: IUsersState) => {
      console.log(state);
    },
    addUserState: (state: IUsersState, { payload }) => {
      state.data = [...state.data, payload];
    },
    updateFirstUserState: (state: IUsersState, { payload }) => {
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

export const addUser = (payload: IUser) => async (dispatch: Dispatch) => {
  dispatch(addUserState(payload));
};

export const updateFirstUser = (payload: IUpDateUser) => async (dispatch: Dispatch) => {
  dispatch(updateFirstUserState(payload));
};

export default slice.reducer;
