import {TextInput} from 'react-native';
import {glStyles} from '../styles/style';

interface ITextFieldProps {
  onChangeText?: (arg0: any) => void;
  inputValue?: string;
  placeholder?: string;
  editable: boolean;
  multiline?: boolean;
}

const TextField = ({
  onChangeText,
  inputValue,
  placeholder,
  editable,
  multiline,
}: ITextFieldProps) => {
  return (
    <TextInput
      editable={editable}
      style={editable ? glStyles.textInput : glStyles.inactiveTextInput}
      onChangeText={onChangeText}
      value={inputValue}
      placeholder={placeholder}
      multiline={multiline}
    />
  );
};

export default TextField;
