import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatchType, StateType} from '../types/store-type';
import {FetchingTasksType, TaskType} from '../types/types';

export const fetchTasks = createAsyncThunk<FetchingTasksType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchTasks',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FetchingTasksType>('tasks.json');

    return data;
  }
);

export const sendTask = createAsyncThunk<TaskType, TaskType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/sendTask',
  async (task, {extra: api}) => {
    const {data} = await api.post<TaskType>('tasks.json', task);

    return data;
  }
);
