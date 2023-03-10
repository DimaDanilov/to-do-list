import {useHomeStore} from '../store/HomeStore';
import {useState} from 'react';
import {ModalContainer} from '../../../ui/ModalContainer';
import {Button} from '../../../ui/Button';
import TextField from '../../../ui/TextField';
import {Text} from 'react-native';
import {glStyles} from '../../../styles/style';

const AddTask = () => {
  const homeStore = useHomeStore();
  const [addTaskTitleText, setAddTaskTitleText] = useState('');
  const [addDescriptionText, setAddDescriptionText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onBtnShowModal = () => {
    setIsModalVisible(true);
  };
  const onBtnHideModal = () => {
    setIsModalVisible(false);
  };

  const onChangeTitleHandler = (newText: string) => {
    setAddTaskTitleText(newText);
  };
  const onChangeDescriptionHandler = (newText: string) => {
    setAddDescriptionText(newText);
  };
  const onCreateTaskClickHandler = () => {
    homeStore.addNewTask(addTaskTitleText, addDescriptionText);
    setAddTaskTitleText('');
    setAddDescriptionText('');
  };

  return (
    <>
      <Button onPress={onBtnShowModal} title={'Add new task'} />

      <ModalContainer visible={isModalVisible} onRequestClose={onBtnHideModal}>
        <Text style={glStyles.titleText}>Add new task</Text>
        <TextField
          onChangeText={onChangeTitleHandler}
          inputValue={addTaskTitleText}
          placeholder="Add new task title..."
          editable={true}
        />
        <TextField
          onChangeText={onChangeDescriptionHandler}
          inputValue={addDescriptionText}
          placeholder="Add new task description..."
          editable={true}
        />
        <Button onPress={onCreateTaskClickHandler} title={'Add task'} />
      </ModalContainer>
    </>
  );
};

export default AddTask;
