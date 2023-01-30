import {TasksType} from './types/types';

export const tasks: TasksType = {
  scheduled: [{
    id: 1,
    title: 'Заголовок задачи',
    description: 'Описание задачи'
  }],
  current: [{
    id: 1,
    title: 'Заголовок задачи',
    description: 'Описание задачи'
  },
  {
    id: 2,
    title: 'Заголовок задачи',
    description: 'Описание задачи'
  }],
  completed: [{
    id: 1,
    title: 'Заголовок задачи',
    description: 'Описание задачи'
  }]
};
