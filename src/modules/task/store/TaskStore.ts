import React from 'react';
import {makeAutoObservable} from 'mobx';
import {Task} from '../../../models/Task';
import {useHomeStore} from '../../home/store/HomeStore';

class TaskStore {
  homeStore = useHomeStore();

  currentTask: Task = {
    id: '',
    task: '',
    description: '',
    priority: 0,
    completed: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Copy task from main store to work with
  setCurrentTask(task: Task) {
    this.currentTask = {...task};
  }

  // Fields changes
  setCurrentTaskTitle(title: string) {
    this.currentTask.task = title;
  }
  setCurrentTaskDescription(description: string) {
    this.currentTask.description = description;
  }
  setCurrentTaskPriority(priority: number) {
    this.currentTask.priority = priority;
  }
  setCurrentTaskCompletition() {
    this.currentTask.completed = !this.currentTask.completed;
  }

  // Replace task in main store with the new one
  saveChangesInTask() {
    this.homeStore.toDoList = this.homeStore.toDoList.map(obj =>
      obj.id === this.currentTask.id ? (obj = {...this.currentTask}) : obj,
    );
  }

  deleteTask(idToRemove: string) {
    this.homeStore.toDoList = this.homeStore.toDoList.filter(
      el => el.id !== idToRemove,
    );
  }
}

export const TaskStoreInstance = new TaskStore();
const TaskStoreContext = React.createContext(TaskStoreInstance);

export const useTaskStore = () => {
  return React.useContext(TaskStoreContext);
};

export default new TaskStore();
