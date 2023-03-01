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
    <View style={styles.container}>
      <Text>{value}</Text>
      <TouchableWithoutFeedback onPress={editable ? onPress : undefined}>
        <View
          style={
            editable ? styles.bigCircleEditable : styles.bigCircleNonEditable
          }>
          {checked ? <View style={styles.littleCircle} /> : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 75,
    marginVertical: 5,
  },
  bigCircleNonEditable: {
    marginVertical: 5,
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCircleEditable: {
    marginVertical: 5,
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'transparent',
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
