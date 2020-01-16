import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { setLook } from '../../../redux/actions/look';
import images from '../../../assets';
import styles from './styles';

const RegistrationLookScreen = props => {
  const totalColumns = 3;

  const formatData = (data, totalColumns) => {
    const rows = Math.floor(data.length / totalColumns);
    let lastRowTotalElements = data.length - (rows * totalColumns);

    while (lastRowTotalElements !== totalColumns && lastRowTotalElements !== 0) {
      data.push({ key: `empty-${lastRowTotalElements}`, empty: true });
      lastRowTotalElements++;
    }

    return data;
  };

  hairStylePressed = selectedItem => {
    props.setLook(selectedItem);
    Alert.alert(`Haz seleccionado el look Nº${selectedItem}. Gracias por registrarte ${props.user.firstName} ${props.user.lastName}, revisa tu email para confirmar tu cuenta!`);
  };

  renderItem = ({ item, index }) => {
    if (item.empty) return <View style={[styles.hairStyleButton, styles.itemBlank]} />;
    return (
      <TouchableOpacity
        style={styles.hairStyleButton}
        onPress={() => hairStylePressed(index)}
      >
        <Image
          source={item.src}
          style={styles.hairStyleImage}
        />
      </TouchableOpacity>
    );
  };

  return(
    <FlatList
      data={formatData(images, totalColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={totalColumns}
    />
  );
};

const mapStateToProps = (user) => ({
  user: user.user
});

const mapDispatchToProps = {
  setLook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationLookScreen);