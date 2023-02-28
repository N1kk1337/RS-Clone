import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cats: false,
  dogs: false,
  firstName: '',
  lastName: '',
  favoriteFilm: '',
  city: '',
};

const paramsSlice = createSlice({
  name: 'filterParams',
  initialState,
  reducers: {
    setFilterParams(state, action) {
      state.cats = action.payload.cats;
      state.dogs = action.payload.dogs;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.favoriteFilm = action.payload.film;
      state.city = action.payload.city;
    },
    removeFilterParams(state) {
      state.cats = false;
      state.dogs = false;
      state.firstName = '';
      state.lastName = '';
      state.favoriteFilm = '';
      state.city = '';
    },
  },
});

export const { setFilterParams, removeFilterParams } = paramsSlice.actions;

export default paramsSlice.reducer;
