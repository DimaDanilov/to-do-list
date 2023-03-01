import React from 'react';
import {observer} from 'mobx-react-lite';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Task} from './models/Task';
import HomeScreen from './modules/home/screens/HomeScreen';
import TaskScreen from './modules/task/screens/TaskScreen';

export type RootStackParamList = {
  Home: undefined;
  Task: {task: Task};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
