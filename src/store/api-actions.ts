import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {BASE_URL} from '../services/api';
import {AppDispatchType, StateType} from '../types/store-type';
import {TasksType} from '../types/types';

export const fetchTasks = createAsyncThunk<TasksType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchTasks',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TasksType>(BASE_URL, {
      headers: {
        'X-Jsio-Token': '9488a79931fd39af4113c2b231cd660e'
      }
    });

    // eslint-disable-next-line no-console
    console.log(data);

    return data;
  }
);
