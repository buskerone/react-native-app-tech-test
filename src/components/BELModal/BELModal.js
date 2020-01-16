import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default props => {
  return (
    <Modal
      transparent
      animationType={props.animation}
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <Image
          source={props.imageSource}
          style={styles.hairStyleImage}
        />
        <Text style={styles.messageText}>{props.message}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};