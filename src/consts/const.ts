type RuTitleType = {
  [key: string]: string;
}

export const RuTitle: RuTitleType = {
  scheduled: 'To Do',
  current: 'Doing',
  completed: 'Done'
} as const;
