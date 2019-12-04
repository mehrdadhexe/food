import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../style/search.style';
class CartBt extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#474747',
          width: 15,
          height: 15,
          padding: 40,
          borderRadius: 50,
          left: 10,
          bottom: 10,
          zIndex: 2,
          position: 'absolute',
        }}>
        <SimpleLineIcons
          name="basket"
          style={{
            color: '#fff',
            paddingTop: 20,
            paddingRight: 24,
            fontSize: 40,
            zIndex: 3,
            position: 'absolute',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            zIndex: 4,
            borderRadius:50,
            padding:2,
            textAlign:'center',
            backgroundColor: '#ff625d',
            top: 20,
            left: 15,
            fontSize: 14,
          }}>
          2
        </Text>
      </View>
    );
  }
}

export default CartBt;
