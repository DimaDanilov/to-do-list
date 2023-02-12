import {useMainStore} from './HomeStore';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, FlatList} from 'react-native';
import {SearchTask} from './subcomponents/SearchTask';
import {AddTask} from './subcomponents/AddTask';
import {TaskItem} from './subcomponents/TaskItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigate';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = observer(({navigation}: HomePageProps) => {
  const mainStore = useMainStore();
  return (
    <SafeAreaView>
      <AddTask />
      <SearchTask />
      <FlatList
        data={
          mainStore.searchTaskText
            ? mainStore.filteredToDoList
            : mainStore.toDoList
        }
        renderItem={({item}) => (
          <TaskItem task={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
});

export default HomePage;
