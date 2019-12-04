import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from '../style/catcard.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
class CardItem extends Component {
  render() {
    return (
      <View style={styles.warpbigcat}>
        <Image
          style={styles.bigcat}
          source={{
            uri: 'https://www.tasvirezendegi.com/wp-content/uploads/2016/09/tasvirezendegi-ir-718.jpg',
          }}
        />
        <Text style={styles.bigcattex}>رستوران</Text>
      </View>
    );
  }
}

export default CardItem;
