import React from 'react';
import {observer} from 'mobx-react-lite';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Task} from './models/Task';
import HomePage from '../src/components/HomePage/HomePage';
import TaskPage from '../src/components/TaskPage/TaskPage';

export type RootStackParamList = {
  Home: undefined;
  Task: {task: Task};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Task" component={TaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigate;
