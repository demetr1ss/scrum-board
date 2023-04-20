export type TaskNoIdType = {
  completed: boolean;
  current: boolean;
  scheduled: boolean;
  title: string;
  description: string;
};

export interface TaskType extends TaskNoIdType {
  id: string;
}

export type FetchingTasksType = {
  [key: string]: TaskNoIdType;
};

export type SendTaskType = {
  id: string;
  task: TaskNoIdType;
};

export type TasksType = TaskType[];
