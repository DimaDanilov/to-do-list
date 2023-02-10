import {makeAutoObservable} from 'mobx';
import React from 'react';
import {Task} from '../models/Task';

class TaskStore {
  toDoList: Task[] = [
    {
      task: 'Make breakfast',
      description: 'Tasty eggs and my favourite bread as always',
      priority: 3,
      completed: true,
    },
    {
      task: 'Clean clothes',
      description: 'My jeans are too dirty, damn',
      priority: 1,
      completed: false,
    },
    {
      task: 'Pass the exam',
      description: 'I want to pass math exam. I think I should get ready to it',
      priority: 1,
      completed: false,
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
        description: '',
        priority: 0,
        completed: false,
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
