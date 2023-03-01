import React from 'react';
import {makeAutoObservable} from 'mobx';
import {Task} from '../../../models/Task';
import uuid from 'react-uuid';

class HomeStore {
  toDoList: Task[] = [];
  searchTaskText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  // SET new task to to-do-list
  addNewTask(taskTitle: string) {
    if (taskTitle) {
      this.toDoList.push({
        id: uuid(),
        task: taskTitle,
        description: '',
        priority: 0,
        completed: false,
      });
    }
  }

  // Change search field content variable
  setSearchTaskText(text: string) {
    this.searchTaskText = text;
  }

  // Check if search request contains in tasks
  get filterToDoList() {
    return this.toDoList.filter(el =>
      el.task.toLowerCase().includes(this.searchTaskText.toLowerCase()),
    );
  }
}

export const HomeStoreInstance = new HomeStore();
const HomeStoreContext = React.createContext(HomeStoreInstance);

export const useHomeStore = () => {
  return React.useContext(HomeStoreContext);
};

export default new HomeStore();
