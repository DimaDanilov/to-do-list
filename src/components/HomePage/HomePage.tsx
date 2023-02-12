import {useTaskStore} from '../../store/TaskStore';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {SearchTask} from './subcomponents/SearchTask';
import {AddTask} from './subcomponents/AddTask';
import {TaskItem} from './subcomponents/TaskItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigate';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = observer(({navigation}: HomePageProps) => {
  const taskStore = useTaskStore();
  return (
    <SafeAreaView>
      <AddTask />
      <SearchTask />
      <FlatList
        data={
          taskStore.searchTaskText
            ? taskStore.filteredToDoList
            : taskStore.toDoList
        }
        renderItem={({item}) => (
          <TaskItem task={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
});

export default HomePage;
