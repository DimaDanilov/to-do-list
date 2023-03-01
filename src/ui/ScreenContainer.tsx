import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {glStyles} from '../styles/style';

type IScreenContainerProps = {
  children?: React.ReactNode;
};

export const ScreenContainer = ({children}: IScreenContainerProps) => (
  <SafeAreaView style={glStyles.screenContainer}>{children}</SafeAreaView>
);
