import {useHomeStore} from '../store/HomeStore';
import {useState} from 'react';
import FieldWithButton from '../../../ui/FieldWithButton';
import {ModalContainer} from '../../../ui/ModalContainer';
import {Button} from '../../../ui/Button';

const AddTask = () => {
  const homeStore = useHomeStore();
  const [addTaskText, setAddTaskText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onBtnShowModal = () => {
    setIsModalVisible(true);
  };
  const onBtnHideModal = () => {
    setIsModalVisible(false);
  };

  const onClickHandler = () => {
    homeStore.addNewTask(addTaskText);
    setAddTaskText('');
  };

  const onChangeHandler = (newText: string) => setAddTaskText(newText);

  return (
    <>
      <Button onPress={onBtnShowModal} title={'Add new task'} />
      <ModalContainer visible={isModalVisible} onRequestClose={onBtnHideModal}>
        <Button onPress={onBtnHideModal} title={'Hide'} />
        <FieldWithButton
          onChangeText={onChangeHandler}
          inputValue={addTaskText}
          placeholder="Add a new task..."
          onBtnPress={onClickHandler}
          title="Add task"
        />
      </ModalContainer>
    </>
  );
};

export default AddTask;
