import {createSlice} from '@reduxjs/toolkit';
import {LoadingStatus} from '../../consts/const';
import {TasksType} from '../../types/types';
import {fetchTasks} from '../api-actions';

const initialState = {
  tasks: {} as TasksType,
  tasksLoadingStatus: LoadingStatus.Idle
};

export const appProcess = createSlice({
  name: 'appProcess',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.tasksLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchTasks.pending, (state) => {
        state.tasksLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.tasksLoadingStatus = LoadingStatus.Rejected;
      });
  }
});
