import {observer} from 'mobx-react-lite';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {AddTask} from './src/components/MainPage/AddTask';
import {SearchTask} from './src/components/MainPage/SearchTask';
import {useTaskStore} from './src/store/TaskStore';

export const App = observer(() => {
  const taskStore = useTaskStore();

  return (
    <SafeAreaView>
      <AddTask />
      <SearchTask />
      <FlatList
        data={
          taskStore.searchTaskText
            ? taskStore.filteredToDoList
            : taskStore.toDoList
        }
        renderItem={({item}) => <Text>{item.task}</Text>}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
