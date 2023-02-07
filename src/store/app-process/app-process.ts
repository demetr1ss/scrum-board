import {createSlice} from '@reduxjs/toolkit';
import {LoadingStatus} from '../../consts/const';
import {TasksType} from '../../types/types';
import {fetchTasks, sendTask} from '../api-actions';

const initialState = {
  tasks: {} as TasksType,
  tasksLoadingStatus: LoadingStatus.Idle,
  taskSendingStatus: LoadingStatus.Idle,
};

export const appProcess = createSlice({
  name: 'appProcess',
  initialState,
  reducers: {
    changeTaskSendingStatus: (state, action: {payload: LoadingStatus; type: string}) => {
      state.taskSendingStatus = action.payload;
    }
  },
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
      })
      .addCase(sendTask.fulfilled, (state, action) => {
        state.tasks.scheduled.push(action.payload);
        state.taskSendingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(sendTask.pending, (state) => {
        state.taskSendingStatus = LoadingStatus.Pending;
      })
      .addCase(sendTask.rejected, (state) => {
        state.taskSendingStatus = LoadingStatus.Rejected;
      });
  }
});

export const {changeTaskSendingStatus} = appProcess.actions;
