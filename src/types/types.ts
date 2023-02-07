export type TaskType = {
  id: string;
  title: string;
  description: string;
}

export type TasksType = {
  [key: string]: TaskType[];
}
