import {makeAutoObservable} from 'mobx';
import React from 'react';
import {Task} from '../models/Task';

class TaskStore {
  toDoList: Task[] = [
    {
      task: 'Make breakfast',
    },
    {
      task: 'Clean clothes',
    },
    {
      task: 'Pass the exam',
    },
  ];
  newTaskText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  // SET new task to to-do-list
  setToDoList() {
    this.toDoList = [
      ...this.toDoList,
      {
        task: this.newTaskText,
      },
    ];
  }

  // Change text field content variable
  setNewTaskText(text: string) {
    this.newTaskText = text;
  }
}

export const TaskStoreInstance = new TaskStore();
const TaskStoreContext = React.createContext(TaskStoreInstance);

export const useTaskStore = () => {
  return React.useContext(TaskStoreContext);
};

export default new TaskStore();
