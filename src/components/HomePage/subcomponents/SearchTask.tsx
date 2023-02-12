import {Button, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useMainStore} from '../HomeStore';

export const SearchTask = observer(() => {
  const mainStore = useMainStore();

  const onChangeHandler = (text: string) => {
    mainStore.setSearchTaskText(text);
    mainStore.filterToDoList();
  };

  const onClickHandler = () => {
    mainStore.setSearchTaskText('');
  };

  return (
    <>
      <TextInput
        onChangeText={newText => onChangeHandler(newText)}
        value={mainStore.searchTaskText}
      />
      <Button onPress={onClickHandler} title="Clean search" />
    </>
  );
});
