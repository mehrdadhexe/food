import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CatCard from '../component/CatCard';
class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

          <CatCard />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


    alignItems: 'center',
  },
});

export default MainScreen;
