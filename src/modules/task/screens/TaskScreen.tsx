import {useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {ToastAndroid} from 'react-native';
import {Button, CancelButton} from '../../../ui/Button';
import PrioritySection from '../components/PrioritySection';
import {useTaskStore} from '../store/TaskStore';
import {ScreenContainer} from '../../../ui/ScreenContainer';
import TaskInfoSection from '../components/TaskInfoSection';

type TaskPageProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

const TaskScreen = ({navigation, route}: TaskPageProps) => {
  const taskStore = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);

  // Copy data of current task from all tasks to seperate variable onLoad
  useEffect(() => {
    taskStore.setCurrentTask(route.params.task);
  }, []);

  const onEditClickHandler = () => {
    if (isEditing) {
      taskStore.updateTaskDetails();
      ToastAndroid.show('Task saved!', ToastAndroid.SHORT);
    }
    setIsEditing(isEditing => !isEditing);
  };

  const onDeleteClickHandler = () => {
    taskStore.deleteTask(route.params.task.id);
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <TaskInfoSection isEditing={isEditing} />
      <PrioritySection isEditing={isEditing} />
      <Button
        onPress={onEditClickHandler}
        title={isEditing ? 'Save edit' : 'Edit task'}
      />
      <CancelButton onPress={onDeleteClickHandler} title="Delete task" />
    </ScreenContainer>
  );
};

export default TaskScreen;
