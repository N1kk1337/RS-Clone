import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../components/type';

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
