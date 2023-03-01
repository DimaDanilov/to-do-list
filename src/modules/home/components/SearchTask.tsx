import {useHomeStore} from '../store/HomeStore';
import {observer} from 'mobx-react-lite';
import FieldWithButton from '../../../ui/FieldWithButton';

const SearchTask = observer(() => {
  const homeStore = useHomeStore();

  const onChangeHandler = (newText: string) =>
    homeStore.setSearchTaskText(newText);

  return (
    <FieldWithButton
      onChangeText={onChangeHandler}
      inputValue={homeStore.searchTaskText}
      placeholder="Search task..."
      onBtnPress={() => homeStore.setSearchTaskText('')}
      title="Clean search"
    />
  );
});

export default SearchTask;
