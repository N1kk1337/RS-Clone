import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl, User } from '../components/types';

export const fetchUsersInfo = createAsyncThunk(
  'GET_users/fetchUsersInfo',
  async () => {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET',
    });
    return response.json();
    // const response: any = await axios(`${baseUrl}`);
    // return response;
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
  async (props: User) => {
    const upDateUser = JSON.stringify({
      firstName: props.firstName,
      lastName: props.lastName,
      location: props.location,
      country: props.country,
      city: props.city,
      likeCats: props.likeCats,
      likeDogs: props.likeDogs,
      favoriteFilm: props.favoriteFilm,
    });
    const response = await fetch(`${baseUrl}/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: (upDateUser),
    }).then((data) => data.json());
    return response;
  },
);
