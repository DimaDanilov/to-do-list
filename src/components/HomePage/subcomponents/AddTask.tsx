import {observer} from 'mobx-react-lite';
import {useMainStore} from '../HomeStore';
import {TextInput, View} from 'react-native';
import {glStyles} from '../../../styles/style';
import Button from '../../../ui/Button';

export const AddTask = observer(() => {
  const mainStore = useMainStore();

  const onClickHandler = () => {
    mainStore.setToDoList();
  };

  const onChangeHandler = (text: string) => {
    mainStore.setNewTaskText(text);
  };

  return (
    <View style={glStyles.section}>
      <TextInput
        style={glStyles.textInput}
        onChangeText={newText => onChangeHandler(newText)}
        value={mainStore.newTaskText}
        placeholder="Add a new task..."
      />
      <Button onPress={onClickHandler} title="Add task" />
    </View>
  );
});
