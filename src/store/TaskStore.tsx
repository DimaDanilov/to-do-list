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
  filteredToDoList: Task[] = [...this.toDoList];
  newTaskText: string = '';
  searchTaskText: string = '';

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

  // Change search field content variable
  setSearchTaskText(text: string) {
    this.searchTaskText = text;
  }

  // Check if search request contains in tasks
  filterToDoList() {
    this.filteredToDoList = this.toDoList.filter(el =>
      el.task.toLowerCase().includes(this.searchTaskText.toLowerCase()),
    );
  }
}

export const TaskStoreInstance = new TaskStore();
const TaskStoreContext = React.createContext(TaskStoreInstance);

export const useTaskStore = () => {
  return React.useContext(TaskStoreContext);
};

export default new TaskStore();
