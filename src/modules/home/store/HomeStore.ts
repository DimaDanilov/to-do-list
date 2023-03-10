import React from 'react';
import {makeAutoObservable} from 'mobx';
import {Task} from '../../../models/Task';
import uuid from 'react-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deepEqual} from '../../../services/objectComparison';

class HomeStore {
  toDoList: Task[] = [];
  isToDoListLoaded: boolean = false;
  searchTaskText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  getListFromDB = async () => {
    try {
      this.isToDoListLoaded = false;
      const jsonValue = await AsyncStorage.getItem('to_do_list');
      if (jsonValue !== null) {
        const newList: Task[] = JSON.parse(jsonValue);

        // Delete elems from 1 array that are not in 2
        this.toDoList = this.toDoList.filter(el1 => {
          return newList.some(el2 => el2.id === el1.id);
        });

        // Add elems from 2 array that are not in 1
        this.toDoList = this.toDoList.concat(
          newList.filter(
            ({id: id1}) => !this.toDoList.some(({id: id2}) => id2 === id1),
          ),
        );

        // If ID of 2 elem are equal but other fields are not the same, then change this element
        this.toDoList = this.toDoList.map(el1 => {
          return (
            newList.find(el2 => {
              return el2.id === el1.id && !deepEqual(el1, el2);
            }) || el1
          );
        });
      } else {
        this.toDoList = [];
      }
      this.isToDoListLoaded = true;
    } catch (e) {
      console.log(e);
    }
  };

  saveListInDB = async (list: Task[]) => {
    try {
      const jsonValue = JSON.stringify(list);
      await AsyncStorage.setItem('to_do_list', jsonValue);
      this.getListFromDB();
    } catch (e) {
      console.log(e);
    }
  };

  // SET new task to to-do-list
  addNewTask = (taskTitle: string, taskDescription: string) => {
    if (this.isToDoListLoaded && taskTitle) {
      this.saveListInDB([
        ...this.toDoList,
        {
          id: uuid(),
          task: taskTitle,
          description: taskDescription,
          priority: 0,
          completed: false,
        },
      ]);
    }
  };

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
