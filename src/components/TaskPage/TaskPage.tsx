import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParamList} from '../../Navigate';
import {useTaskStore} from '../../store/TaskStore';

type TaskPageProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

interface IRadioButtonProps {
  value: string;
  editable: boolean;
  checked: boolean;
  onPress: (() => void) | undefined;
}

function RadioButton({value, editable, checked, onPress}: IRadioButtonProps) {
  return (
    <View>
      <Text>{value}</Text>
      <TouchableWithoutFeedback onPress={editable ? onPress : undefined}>
        <View
          style={[
            {
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          {checked ? (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const TaskPage = observer(({navigation, route}: TaskPageProps) => {
  const taskStore = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    taskStore.setCurrentTask(route.params.task);
  }, []);

  const onChangeTextHandler = (field: string, newText: string) => {
    taskStore.setCurrentTaskField(field, newText);
  };

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
    <SafeAreaView>
      <TextInput
        value={taskStore.currentTask.task}
        editable={isEditing}
        onChangeText={text => onChangeTextHandler('title', text)}
      />
      <TextInput
        value={taskStore.currentTask.description}
        editable={isEditing}
        onChangeText={text => onChangeTextHandler('description', text)}
      />
      <RadioButton
        value="0"
        editable={isEditing}
        checked={taskStore.currentTask.priority === 0 ? true : false}
        onPress={() => taskStore.setCurrentTaskPriority(0)}
      />
      <RadioButton
        value="1"
        editable={isEditing}
        checked={taskStore.currentTask.priority === 1 ? true : false}
        onPress={() => taskStore.setCurrentTaskPriority(1)}
      />
      <RadioButton
        value="2"
        editable={isEditing}
        checked={taskStore.currentTask.priority === 2 ? true : false}
        onPress={() => taskStore.setCurrentTaskPriority(2)}
      />
      <RadioButton
        value="3"
        editable={isEditing}
        checked={taskStore.currentTask.priority === 3 ? true : false}
        onPress={() => taskStore.setCurrentTaskPriority(3)}
      />
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
      <Button onPress={onDeleteClickHandler} title="Delete task" />
    </SafeAreaView>
  );
});

export default TaskPage;
