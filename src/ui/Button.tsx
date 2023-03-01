import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {glStyles} from '../styles/style';

interface IButtonProps {
  onPress?: () => void;
  title?: string;
}

export const Button = ({onPress, title}: IButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={defaultButtonContainerStyle}>
      <Text style={buttonContainerTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CancelButton = ({onPress, title}: IButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={cancelButtonContainerStyle}>
      <Text style={buttonContainerTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 4,
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const defaultButtonContainerStyle = StyleSheet.compose(
  styles.container,
  glStyles.defaultBtnContainer,
);
const cancelButtonContainerStyle = StyleSheet.compose(
  styles.container,
  glStyles.cancelBtnContainer,
);
const buttonContainerTextStyle = StyleSheet.compose(
  styles.text,
  glStyles.buttonText,
);
