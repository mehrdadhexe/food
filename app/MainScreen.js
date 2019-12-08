import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
    Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CatCard from '../component/CatCard';
import CardItem from '../component/CardItem';

class MainScreen extends Component {

  render() {
      let deviceWidth = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <CatCard />
        <CatCard />
        <CatCard />

      <View style={{backgroundColor:'#ff2831', width:deviceWidth,height:888}}>
          <Text>
              پرطرفدار ها
          </Text>
          <View  >

              <View>
                  <View></View>
                  <View></View>
              </View>
              <View>
                  <View></View>
                  <View></View>
              </View>
          </View>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
