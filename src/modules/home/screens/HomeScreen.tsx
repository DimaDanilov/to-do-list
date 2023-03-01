import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import TaskList from '../components/TaskList';
import {ScreenContainer} from '../../../ui/ScreenContainer';
import AddTask from '../components/AddTask';
import SearchTask from '../components/SearchTask';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation, route}: HomePageProps) => (
  <ScreenContainer>
    <AddTask />
    <SearchTask />
    <TaskList navigation={navigation} route={route} />
  </ScreenContainer>
);

export default HomeScreen;
