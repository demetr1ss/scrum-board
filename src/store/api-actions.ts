import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatchType, StateType} from '../types/store-type';
import {FetchingTasksType, TaskNoIdType, SendTaskType} from '../types/types';

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

export const sendTask = createAsyncThunk<SendTaskType, TaskNoIdType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/sendTask',
  async (task, {extra: api}) => {
    const {data} = await api.post<{name: string}>('tasks.json', task);
    const payload = {
      id: data.name,
      task
    };

    return payload;
  }
);
