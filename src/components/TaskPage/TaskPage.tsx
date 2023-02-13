import {observer} from 'mobx-react-lite';
import {useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigate';
import {glStyles} from '../../styles/style';
import {SafeAreaView, TextInput} from 'react-native';
import Button from '../../ui/Button';
import RadioButton from '../../ui/RadioButton';
import PrioritySection from './PrioritySection';
import {useTaskStore} from './TaskStore';

type TaskPageProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

const TaskPage = observer(({navigation, route}: TaskPageProps) => {
  const taskStore = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);

  // Copy data of current task from all tasks to seperate variable onLoad
  useEffect(() => {
    taskStore.setCurrentTask(route.params.task);
  }, []);

  const onEditClickHandler = () => {
    if (isEditing) {
      taskStore.saveChangesInTask();
    }
    setIsEditing(isEditing => !isEditing);
  };

  const onDeleteClickHandler = () => {
    taskStore.deleteTask(route.params.task.id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={glStyles.screenContainer}>
      <TextInput
        style={isEditing ? glStyles.textInput : glStyles.inactiveTextInput}
        value={taskStore.currentTask.task}
        editable={isEditing}
        onChangeText={text => taskStore.setCurrentTaskTitle(text)}
      />
      <TextInput
        style={isEditing ? glStyles.textInput : glStyles.inactiveTextInput}
        multiline
        value={taskStore.currentTask.description}
        editable={isEditing}
        onChangeText={text => taskStore.setCurrentTaskDescription(text)}
      />
      <PrioritySection isEditing={isEditing} />
      <RadioButton
        value="Completed"
        editable={isEditing}
        checked={taskStore.currentTask.completed}
        onPress={() => taskStore.setCurrentTaskCompletition()}
      />
      <Button
        onPress={onEditClickHandler}
        title={isEditing ? 'Save edit' : 'Edit task'}
      />
      <Button
        color="#F55050"
        onPress={onDeleteClickHandler}
        title="Delete task"
      />
    </SafeAreaView>
  );
});

export default TaskPage;
