import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../../Navigate';

type TaskPageProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

const TaskPage = observer(({route}: TaskPageProps) => {
  return (
    <SafeAreaView>
      <Text>{route.params.task.task}</Text>
      <Text>{route.params.task.description}</Text>
      <Text>{route.params.task.priority}</Text>
      <Text>{route.params.task.completed ? 'True' : 'False'}</Text>
    </SafeAreaView>
  );
});

export default TaskPage;
