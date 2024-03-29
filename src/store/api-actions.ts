import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatchType, StateType} from '../types/store-type';
import {FetchingTasksType, TaskNoIdType, SendTaskType, TaskType, FetchingQuestionsType} from '../types/types';

export const fetchTasks = createAsyncThunk<
  FetchingTasksType,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('data/fetchTasks', async (_arg, {extra: api}) => {
  const {data} = await api.get<FetchingTasksType>('tasks.json');

  return data ? data : {};
});

export const sendTask = createAsyncThunk<
  SendTaskType,
  TaskNoIdType,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('data/sendTask', async (task, {extra: api}) => {
  const {data} = await api.post<{name: string}>('tasks.json', task);
  const payload = {
    id: data.name,
    task,
  };

  return payload;
});

export const deleteTask = createAsyncThunk<
  string,
  string,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('data/deleteTask', async (id, {extra: api}) => {
  await api.delete(`tasks/${id}.json`);

  return id;
});

export const editTask = createAsyncThunk<
  SendTaskType,
  TaskType,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('data/editTask', async (task, {extra: api}) => {
  const {id, ...taskNoId} = task;
  const {data} = await api.patch<TaskNoIdType>(`tasks/${task.id}.json`, taskNoId);
  const payload = {
    id,
    task: data,
  };

  return payload;
});

export const fetchQuestions = createAsyncThunk<
  FetchingQuestionsType,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('data/getRandomQuestion', async (_arg, {extra: api}) => {
  const {data} = await api.get<FetchingQuestionsType>('questions.json');

  return data ? data : {};
});
