export const Title = {
  scheduled: 'scheduled',
  current: 'current',
  completed: 'completed',
} as const;

export const AdaptedTitle: {[key: string]: string} = {
  [Title.scheduled]: 'To Do',
  [Title.current]: 'Doing',
  [Title.completed]: 'Done',
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}
