import {LoadingStatus} from '../../consts/const';
import {StateType} from '../../types/store-type';
import {TasksType} from '../../types/types';

export const getTasks = (state: StateType): TasksType => (
  Object.keys(state.tasks).map((id) => ({
    ...state.tasks[id],
    id
  }))
);

export const getTasksLoadingStatus = (state: StateType): LoadingStatus =>
  state.tasksLoadingStatus;

export const getTaksSendingStatus = (state: StateType): LoadingStatus =>
  state.taskSendingStatus;
