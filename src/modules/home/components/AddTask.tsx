import {useHomeStore} from '../store/HomeStore';
import {useState} from 'react';
import FieldWithButton from '../../../ui/FieldWithButton';

const AddTask = () => {
  const homeStore = useHomeStore();
  const [addTaskText, setAddTaskText] = useState('');

  const onClickHandler = () => {
    homeStore.addNewTask(addTaskText);
    setAddTaskText('');
  };

  const onChangeHandler = (newText: string) => setAddTaskText(newText);

  return (
    <FieldWithButton
      onChangeText={onChangeHandler}
      inputValue={addTaskText}
      placeholder="Add a new task..."
      onBtnPress={onClickHandler}
      title="Add task"
    />
  );
};

export default AddTask;
