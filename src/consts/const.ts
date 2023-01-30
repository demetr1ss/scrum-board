type RuTitleType = {
  [key: string]: string;
}

export const RuTitle: RuTitleType = {
  scheduled: 'Запланированно',
  current: 'В работе',
  completed: 'Завершено'
} as const;
