import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import CatCard from '../component/CatCard';
import CardItem from '../component/CardItem';
class MainScreen extends Component {
  render() {

    return (
      <View style={styles.container}>

          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
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
