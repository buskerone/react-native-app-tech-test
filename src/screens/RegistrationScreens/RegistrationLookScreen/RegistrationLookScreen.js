import React from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setLook } from '../../../redux/actions/looks';
import styles from './styles';

const RegistrationLookScreen = (props) => {
  const totalColumns = 3;
  const data = [
    {
      id: 0,
      src: require('../../../assets/1.png')
    },
    {
      id: 1,
      src: require('../../../assets/2.png')
    },
    {
      id: 2,
      src: require('../../../assets/3.png')
    },
    {
      id: 3,
      src: require('../../../assets/4.png')
    },
    {
      id: 4,
      src: require('../../../assets/5.png')
    },
    {
      id: 5,
      src: require('../../../assets/6.png')
    },
    {
      id: 6,
      src: require('../../../assets/7.png')
    },
    {
      id: 7,
      src: require('../../../assets/8.png')
    },
  ];

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
  };

  renderItem = ({ item, index }) => {
    if (item.empty) return <View style={[styles.hairStyleButton, styles.itemBlank]} />;
    return (
      <TouchableOpacity
        style={styles.hairStyleButton}
        onPress={() => this.hairStylePressed(index)}
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
      data={formatData(data, totalColumns)}
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