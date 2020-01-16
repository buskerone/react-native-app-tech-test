import React from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setLook } from '../../../redux/actions/look';
import BELModal from '../../../components/BELModal';
import images from '../../../assets';
import styles from './styles';

const RegistrationLookScreen = (props) => {
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

  hairStylePressed = (selectedItem) => {
    props.setLook(selectedItem);
    renderModal(selectedItem);
  };

  renderModal = selectedImage => {
    return (
      <BELModal
        animation="bottom"
        imageSource={images[selectedImage].src}
        message={`Gracias por registrarte ${props.user}, revisa tu email para confirmar tu cuenta!`}
      />
    );
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

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = {
  setLook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationLookScreen);