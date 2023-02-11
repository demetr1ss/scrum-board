export const AdaptedTitle: {[key: string]: string} = {
  scheduled: 'To Do',
  current: 'Doing',
  completed: 'Done',
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}
