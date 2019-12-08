import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from '../style/catcard.style';
import CardItem from './CardItem';
class CatCard extends Component {
  render() {
    return (
      <View style={styles.container}>
          <CardItem />
      </View>
    );
  }
}

export default CatCard;
