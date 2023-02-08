export type TaskType = {
  completed: boolean;
  current: boolean;
  scheduled: boolean;
  id: string;
  title: string;
  description: string;
}

export type TaskNoIdType = {
  completed: boolean;
  current: boolean;
  scheduled: boolean;
  title: string;
  description: string;
}

export type TasksType = TaskType[];

export type FetchingTasksType = {
  [key: string]: TaskNoIdType;
}

export type SendTaskType = {
  id: string;
  task: TaskNoIdType;
};
