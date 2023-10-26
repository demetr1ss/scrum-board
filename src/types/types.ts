export type TaskNoIdType = {
  completed: boolean;
  current: boolean;
  scheduled: boolean;
  title: string;
  description: string;
};

export type QuestionType = {
  question: string;
}

export interface TaskType extends TaskNoIdType {
  id: string;
}

export type FetchingTasksType = {
  [key: string]: TaskNoIdType;
};

export type FetchingQuestionsType = {
  [key: string]: QuestionType[];
};

export type SendTaskType = {
  id: string;
  task: TaskNoIdType;
};

export type TasksType = TaskType[];
