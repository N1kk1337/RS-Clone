import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../components/type';

export const fetchUsersInfo = createAsyncThunk(
  'GET_users/fetchUsersInfo',
  async () => {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET',
    });
    return response.json();
  },
);

export interface IUpDateUser {
  userId: number,
  firstNameUser: string,
  lastNameUser: string,
  locationUser: string,
  countryUser: string,
  cityUser: string,
  likeCatsUser: string,
  likeDogsUser: string,
  favoriteFilmUser: string,
}

export const fetchUpDateUser = createAsyncThunk(
  'PUT_user/fetchUpDateUser',
  async (props: IUpDateUser) => {
    const upDateUser = JSON.stringify({
      firstName: props.firstNameUser,
      lastName: props.lastNameUser,
      location: props.locationUser,
      country: props.countryUser,
      city: props.cityUser,
      likeCats: props.likeCatsUser,
      likeDogs: props.likeDogsUser,
      favoriteFilm: props.favoriteFilmUser,
    });
    const response = await fetch(`${baseUrl}/${props.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: (upDateUser),
    }).then((data) => data.json());
    return response;
  },
);
