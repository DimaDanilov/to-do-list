export enum TaskPriority {
  without,
  low,
  middle,
  high,
}

export interface Task {
  id: string;
  task: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
}
