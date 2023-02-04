import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatchType, StateType} from '../types/store-type';
import {TasksType} from '../types/types';

export const fetchTasks = createAsyncThunk<TasksType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchTasks',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TasksType>('/tasks');

    return data;
  }
);
