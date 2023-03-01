import {View} from 'react-native';
import {glStyles} from '../styles/style';
import {Button} from './Button';
import TextField from './TextField';

interface IFieldWithButtonProps {
  onChangeText?: (arg0: any) => void;
  inputValue?: string;
  placeholder?: string;
  onBtnPress?: () => void;
  title: string;
}

const FieldWithButton = ({
  onChangeText,
  inputValue,
  placeholder,
  onBtnPress,
  title,
}: IFieldWithButtonProps) => {
  return (
    <View style={glStyles.section}>
      <TextField
        onChangeText={onChangeText}
        inputValue={inputValue}
        placeholder={placeholder}
        editable={true}
      />
      <Button onPress={onBtnPress} title={title} />
    </View>
  );
};

export default FieldWithButton;
