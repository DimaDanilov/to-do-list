import {Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Task} from '../../../models/Task';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Navigate';

interface ITaskItemProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
  task: Task;
}

export const TaskItem = observer(({navigation, task}: ITaskItemProps) => {
  return (
    <Text onPress={() => navigation.navigate('Task', {task})}>{task.task}</Text>
  );
});
