import {LoadingStatus} from '../../const/const';
import {StateType} from '../../types/store-type';
import {QuestionType, TasksType} from '../../types/types';

export const getTasks = (state: StateType): TasksType =>
  Object.keys(state.tasks).map((id) => ({
    ...state.tasks[id],
    id,
  }));

export const getQuestions = (state: StateType): QuestionType[] => Object.values(state.questions)[0];
export const getQuestionsLoadingStatus = (state: StateType): LoadingStatus => state.questionsLoadingStatus;

export const getTasksLoadingStatus = (state: StateType): LoadingStatus => state.tasksLoadingStatus;

export const getTaskSendingStatus = (state: StateType): LoadingStatus => state.taskSendingStatus;

export const getTaskEditingStatus = (state: StateType): LoadingStatus => state.taskEditingStatus;

export const getTaskDeletingStatus = (state: StateType): LoadingStatus => state.taskDeletingStatus;
