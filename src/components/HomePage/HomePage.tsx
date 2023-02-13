import {observer} from 'mobx-react-lite';
import {SafeAreaView, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigate';
import {glStyles} from '../../styles/style';
import {useMainStore} from './HomeStore';
import {SearchTask} from './subcomponents/SearchTask';
import {AddTask} from './subcomponents/AddTask';
import {TaskItem} from './subcomponents/TaskItem';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = observer(({navigation}: HomePageProps) => {
  const mainStore = useMainStore();
  return (
    <SafeAreaView style={glStyles.screenContainer}>
      <AddTask />
      <SearchTask />
      <FlatList
        style={glStyles.section}
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
