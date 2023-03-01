import {observer} from 'mobx-react-lite';
import {Task} from '../../../models/Task';
import {glStyles} from '../../../styles/style';
import {useHomeStore} from '../store/HomeStore';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import TaskItem from './TaskItem';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const TaskList = observer(({navigation}: HomePageProps) => {
  const homeStore = useHomeStore();

  const renderItem = ({item}: {item: Task}) => {
    return <TaskItem task={item} navigation={navigation} />;
  };

  const getItemId = (item: Task) => item.id;

  return (
    <FlatList
      style={glStyles.section}
      data={homeStore.filterToDoList}
      renderItem={renderItem}
      keyExtractor={getItemId}
    />
  );
});

export default TaskList;
