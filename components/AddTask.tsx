import {Button, TextInput} from 'react-native';
import {useTaskStore} from '../store/TaskStore';
import {observer} from 'mobx-react-lite';

export const AddTask = observer(() => {
  const taskStore = useTaskStore();

  const onClickHandler = () => {
    taskStore.setToDoList();
    taskStore.setNewTaskText('');
  };

  const onChangeHandler = (newText: string) => {
    taskStore.setNewTaskText(newText);
  };

  console.log(taskStore.newTaskText);

  return (
    <>
      <TextInput
        onChangeText={newText => onChangeHandler(newText)}
        value={taskStore.newTaskText}
      />
      <Button onPress={onClickHandler} title="Add task" />
    </>
  );
});
