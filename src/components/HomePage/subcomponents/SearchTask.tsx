import {Button, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useTaskStore} from '../../../store/TaskStore';

export const SearchTask = observer(() => {
  const taskStore = useTaskStore();

  const onChangeHandler = (text: string) => {
    taskStore.setSearchTaskText(text);
    taskStore.filterToDoList();
  };

  const onClickHandler = () => {
    taskStore.setSearchTaskText('');
  };

  return (
    <>
      <TextInput
        onChangeText={newText => onChangeHandler(newText)}
        value={taskStore.searchTaskText}
      />
      <Button onPress={onClickHandler} title="Clean search" />
    </>
  );
});
