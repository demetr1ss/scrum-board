export type TaskType = {
  id: number;
  title: string;
  description: string;
}

export type TasksType = {
  [key: string]: TaskType[];
}
