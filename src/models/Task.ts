export enum TaskPriority {
  without,
  low,
  middle,
  high,
}

export interface Task {
  id: string; // uses uuid library to generate ID
  task: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
}
