import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import MainStack from './src/Navigate';

const Stack = createNativeStackNavigator();

export const App = observer(() => {
  return <MainStack />;
});
