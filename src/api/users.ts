import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl, IUser } from '../components/types';

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
  'PATCH_user/fetchUpDateUser',
  async (props: IUser) => {
    const upDateUser = JSON.stringify(props);
    const response = await fetch(`${baseUrl}/${props.userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: (upDateUser),
    }).then((data) => data.json());
    return response;
  },
);
