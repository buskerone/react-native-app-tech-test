import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const BELModal = ({
  animation,
  imageSource,
  message,
  visible
}) => (
  <Modal
    transparent
    animationType={animation}
    onRequestClose={() => {}}
  >
    <View style={styles.modalContainer}>
      <Image
        source={imageSource}
        style={styles.hairStyleImage}
      />
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default BELModal;