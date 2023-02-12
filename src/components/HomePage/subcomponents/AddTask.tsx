import {Button, TextInput} from 'react-native';
import {useTaskStore} from '../../../store/TaskStore';
import {observer} from 'mobx-react-lite';

export const AddTask = observer(() => {
  const taskStore = useTaskStore();

  const onClickHandler = () => {
    taskStore.setToDoList();
    taskStore.setNewTaskText('');
  };

  const onChangeHandler = (text: string) => {
    taskStore.setNewTaskText(text);
  };

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
