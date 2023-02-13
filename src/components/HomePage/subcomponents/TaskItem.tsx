import {observer} from 'mobx-react-lite';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Navigate';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {Task} from '../../../models/Task';

interface ITaskItemProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
  task: Task;
}

export const TaskItem = observer(({navigation, task}: ITaskItemProps) => {
  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => navigation.navigate('Task', {task})}>
      <Text style={styles.taskText}>{task.task}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#555555',
  },
});
