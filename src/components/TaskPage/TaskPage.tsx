import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {Button, SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../../Navigate';
import {useTaskStore} from '../../store/TaskStore';

type TaskPageProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

const TaskPage = observer(({navigation, route}: TaskPageProps) => {
  const taskStore = useTaskStore();

  const onClickHandler = () => {
    taskStore.deleteTask(route.params.task.id);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text>{route.params.task.task}</Text>
      <Text>{route.params.task.description}</Text>
      <Text>{route.params.task.priority}</Text>
      <Text>{route.params.task.completed ? 'True' : 'False'}</Text>
      <Button onPress={onClickHandler} title="Delete task" />
    </SafeAreaView>
  );
});

export default TaskPage;
