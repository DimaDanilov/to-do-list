import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {StyleSheet} from 'react-native';

interface IRadioButtonProps {
  value: string;
  editable: boolean;
  checked: boolean;
  onPress: (() => void) | undefined;
}

const RadioButton = ({
  value,
  editable,
  checked,
  onPress,
}: IRadioButtonProps) => {
  return (
    <View style={styles().container}>
      <Text>{value}</Text>
      <TouchableWithoutFeedback onPress={editable ? onPress : undefined}>
        <View style={styles(editable).bigCircle}>
          {checked ? <View style={styles().littleCircle} /> : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = (editable?: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 75,
      marginVertical: 5,
    },
    bigCircle: {
      marginVertical: 5,
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: editable ? 'transparent' : '#dadada',
      alignItems: 'center',
      justifyContent: 'center',
    },
    littleCircle: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: '#000',
    },
  });

export default RadioButton;
