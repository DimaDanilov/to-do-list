import {makeAutoObservable} from 'mobx';
import React from 'react';
import uuid from 'react-uuid';
import {Task} from '../models/Task';

class TaskStore {
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
  currentTask: Task = {
    id: '',
    task: '',
    description: '',
    priority: 0,
    completed: false,
  };

  setCurrentTask(task: Task) {
    this.currentTask = {...task};
  }

  setCurrentTaskField(field: string, value: string) {
    if (this.currentTask) {
      if (field === 'title') {
        this.currentTask.task = value;
      }
      if (field === 'description') {
        this.currentTask.description = value;
      }
    }
  }

  setCurrentTaskPriority(priority: number) {
    if (this.currentTask) {
      this.currentTask.priority = priority;
    }
  }
  setCurrentTaskCompletition() {
    if (this.currentTask) {
      this.currentTask.completed = !this.currentTask.completed;
    }
  }

  saveChangesInTask() {
    this.toDoList = this.toDoList.map(obj =>
      obj.id === this.currentTask.id ? (obj = {...this.currentTask}) : obj,
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  // SET new task to to-do-list
  setToDoList() {
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

  deleteTask(idToRemove: string) {
    this.toDoList = this.toDoList.filter(el => el.id !== idToRemove);
  }
}

export const TaskStoreInstance = new TaskStore();
const TaskStoreContext = React.createContext(TaskStoreInstance);

export const useTaskStore = () => {
  return React.useContext(TaskStoreContext);
};

export default new TaskStore();
