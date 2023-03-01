import {StyleSheet} from 'react-native';

export const glStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  section: {
    marginVertical: 15,
  },
  textInput: {
    backgroundColor: '#ffffff',
    color: '#555555',
    width: '100%',
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#009688',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
  inactiveTextInput: {
    backgroundColor: '#dadada',
    color: '#555555',
    width: '100%',
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#939393',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
  defaultBtnContainer: {
    backgroundColor: '#009688',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 8,
  },
  cancelBtnContainer: {
    backgroundColor: '#F55050',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
