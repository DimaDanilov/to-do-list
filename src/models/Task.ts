export enum TaskPriority {
  without,
  low,
  middle,
  high,
}

export interface Task {
  task: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
}
