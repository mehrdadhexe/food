import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from '../style/catcard.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Actions} from 'react-native-router-flux';

class CardItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>{Actions.shop_page()}}>
        <View style={styles.warpbigcat}>
          <Image
            style={styles.bigcat}
            source={{
              uri:
                'https://www.tasvirezendegi.com/wp-content/uploads/2016/09/tasvirezendegi-ir-718.jpg',
            }}
          />
          <Text style={styles.bigcattex}>رستوران</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CardItem;
