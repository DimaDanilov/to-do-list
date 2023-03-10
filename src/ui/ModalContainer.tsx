import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {glStyles} from '../styles/style';
import {Modal} from 'react-native';

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
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}>
      <SafeAreaView style={glStyles.modalContainer}>{children}</SafeAreaView>
    </SafeAreaView>
  </Modal>
);
