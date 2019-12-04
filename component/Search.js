import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from '../style/search.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleLineIcons name="magnifier" style={styles.btl} />
        <Text  style={styles.text} >جست و جو کنید</Text>
      </View>
    );
  }
}

export default Search;
