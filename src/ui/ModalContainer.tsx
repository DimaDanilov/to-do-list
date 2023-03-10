import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {glStyles} from '../styles/style';
import {Modal} from 'react-native';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IModalContainerProps = {
  children?: React.ReactNode;
  visible: boolean;
  onRequestClose: () => void;
};

export const ModalContainer = ({
  children,
  visible,
  onRequestClose,
}: IModalContainerProps) => (
  <Modal
    animationType="fade"
    visible={visible}
    onRequestClose={onRequestClose}
    transparent>
    <TouchableOpacity
      onPressOut={onRequestClose}
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <SafeAreaView style={glStyles.modalContainer}>
          {/* X button */}
          <Icon
            name="close"
            size={30}
            onPress={onRequestClose}
            style={{position: 'absolute', right: 5, top: 5}}
          />
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  </Modal>
);
