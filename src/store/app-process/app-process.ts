import {createSlice} from '@reduxjs/toolkit';
import {LoadingStatus} from '../../const/const';
import {FetchingTasksType} from '../../types/types';
import {deleteTask, editTask, fetchTasks, sendTask} from '../api-actions';

const initialState = {
  tasks: {} as FetchingTasksType,
  tasksLoadingStatus: LoadingStatus.Idle,
  taskSendingStatus: LoadingStatus.Idle,
  taskEditingStatus: LoadingStatus.Idle,
};

export const appProcess = createSlice({
  name: 'appProcess',
  initialState,
  reducers: {
    changeTaskSendingStatus: (state, action: {payload: LoadingStatus; type: string}) => {
      state.taskSendingStatus = action.payload;
    },
    changeTaskEditingStatus: (state, action: {payload: LoadingStatus; type: string}) => {
      state.taskEditingStatus = action.payload;
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
        const {id, task} = action.payload;
        state.tasks[id] = task;
        state.taskSendingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(sendTask.pending, (state) => {
        state.taskSendingStatus = LoadingStatus.Pending;
      })
      .addCase(sendTask.rejected, (state) => {
        state.taskSendingStatus = LoadingStatus.Rejected;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const id = action.payload;
        delete state.tasks[id];
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const {id, task} = action.payload;
        state.tasks[id] = task;
        state.taskEditingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(editTask.pending, (state) => {
        state.taskEditingStatus = LoadingStatus.Pending;
      })
      .addCase(editTask.rejected, (state) => {
        state.taskEditingStatus = LoadingStatus.Rejected;
      });
  },
});

export const {changeTaskSendingStatus, changeTaskEditingStatus} = appProcess.actions;
