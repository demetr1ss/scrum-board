import {TasksType} from './types/types';

export const tasks: TasksType = {
  scheduled: [{
    id: 1,
    title: 'Запланированная задача',
    description: 'Описание запланированной задачи'
  }],
  current: [{
    id: 1,
    title: 'Задача в работе',
    description: 'Описание текущей задачи'
  },
  {
    id: 2,
    title: 'Задача в работе 2',
    description: 'Описание текущей задачи 2'
  }],
  completed: [{
    id: 1,
    title: 'Завершенная задача',
    description: 'Описание завершенной задачи'
  }]
};
