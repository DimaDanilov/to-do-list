import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {glStyles} from '../styles/style';

interface IButtonProps {
  onPress?: () => void;
  title?: string;
  color?: string;
}
const buttonStyles = glStyles.button;

const Button = ({onPress, title, color}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(buttonStyles, color).container}>
      <Text style={styles(buttonStyles).text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (buttonStyles: any, customColor?: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: customColor || buttonStyles.backgroundColor || 'blue',
      borderRadius: buttonStyles.borderRadius || 0,
      marginVertical: buttonStyles.marginVertical || 0,
      marginHorizontal: buttonStyles.marginHorizontal || 0,
      paddingVertical: buttonStyles.paddingVertical || 4,
      paddingHorizontal: buttonStyles.paddingHorizontal || 0,
    },
    text: {
      fontSize: buttonStyles.fontSize || 14,
      color: buttonStyles.color || '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });

export default Button;
