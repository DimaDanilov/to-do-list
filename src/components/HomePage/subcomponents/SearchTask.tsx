import {observer} from 'mobx-react-lite';
import {useMainStore} from '../HomeStore';
import {TextInput, View} from 'react-native';
import {glStyles} from '../../../styles/style';
import Button from '../../../ui/Button';

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
    <View style={glStyles.section}>
      <TextInput
        style={glStyles.textInput}
        onChangeText={newText => onChangeHandler(newText)}
        value={mainStore.searchTaskText}
        placeholder="Search task..."
      />
      <Button onPress={onClickHandler} title="Clean search" />
    </View>
  );
});
