import {Button, TextInput} from 'react-native';
import {useMainStore} from '../HomeStore';
import {observer} from 'mobx-react-lite';

export const AddTask = observer(() => {
  const mainStore = useMainStore();

  const onClickHandler = () => {
    mainStore.setToDoList();
    mainStore.setNewTaskText('');
  };

  const onChangeHandler = (text: string) => {
    mainStore.setNewTaskText(text);
  };

  return (
    <>
      <TextInput
        onChangeText={newText => onChangeHandler(newText)}
        value={mainStore.newTaskText}
      />
      <Button onPress={onClickHandler} title="Add task" />
    </>
  );
});
