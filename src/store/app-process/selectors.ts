import {LoadingStatus} from '../../consts/const';
import {StateType} from '../../types/store-type';
import {TasksType} from '../../types/types';

export const getTasks = (state: StateType): TasksType =>
  state.tasks;

export const getTasksLoadingStatus = (state: StateType): LoadingStatus =>
  state.tasksLoadingStatus;
