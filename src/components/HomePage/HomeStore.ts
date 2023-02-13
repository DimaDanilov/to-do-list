import React from 'react';
import {makeAutoObservable} from 'mobx';
import {Task} from '../../models/Task';
import uuid from 'react-uuid';

class MainStore {
  toDoList: Task[] = [
    {
      id: uuid(),
      task: 'Make breakfast',
      description: 'Tasty eggs and my favourite bread as always',
      priority: 3,
      completed: true,
    },
    {
      id: uuid(),
      task: 'Clean clothes',
      description: 'My jeans are too dirty, damn',
      priority: 1,
      completed: false,
    },
    {
      id: uuid(),
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
    if (this.newTaskText) {
      this.toDoList = [
        ...this.toDoList,
        {
          id: uuid(),
          task: this.newTaskText,
          description: '',
          priority: 0,
          completed: false,
        },
      ];
      this.setNewTaskText('');
    }
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

export const MainStoreInstance = new MainStore();
const MainStoreContext = React.createContext(MainStoreInstance);

export const useMainStore = () => {
  return React.useContext(MainStoreContext);
};

export default new MainStore();
