import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

function App(): JSX.Element {
  const [newTaskText, setNewTaskText] = useState('');
  const [toDoList, setToDoList] = useState([
    {
      task: 'Make breakfast',
    },
    {
      task: 'Clean clothes',
    },
    {
      task: 'Pass the exam',
    },
  ]);

  const onClickHandler = () => {
    setToDoList([
      ...toDoList,
      {
        task: newTaskText,
      },
    ]);
    setNewTaskText('');
  };

  const onChangeHandler = (newText: string) => {
    setNewTaskText(newText);
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={newText => onChangeHandler(newText)}
        value={newTaskText}
      />
      <FlatList
        data={toDoList}
        renderItem={({item}) => <Text>{item.task}</Text>}
      />
      <Button onPress={onClickHandler} title="Add task" />
    </SafeAreaView>
  );
}

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

export default App;
