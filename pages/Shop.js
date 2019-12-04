import React, { Component } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderStyle from '../app/Header.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeadShop from '../component/HeadShop';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });

    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}>
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../res/img/slide1.jpg')}
          />

          <View style={styles.bar}>
            <View style={styles.cat_warp}>
              <ScrollView horizontal={true} style={styles.cat}>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
                <Text>kkkkk</Text>
              </ScrollView>
            </View>

            <SimpleLineIcons name="menu" style={styles.menu} />
            <SimpleLineIcons name="heart" style={styles.heart} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  cat: {
    width: '100%',
    height: 100,
    position:'relative',
    flexDirection: 'row',
    zIndex: 1,
    backgroundColor: '#ff0946',
  },
    cat_warp:{
    position:'relative',
      flexDirection:'row',
      top:100,
        backgroundColor: '#ffee35',
        justifyContent:'center',
        alignItems:'center',
        height: 50,
      zIndex: 3,
    },
  menu: {
    position: 'absolute',
    left: 10,
    top: 16,
    fontSize: 18,
    zIndex: 2,
    color: '#fdcb6e',
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 16,
    fontSize: 18,
    zIndex: 2,
    color: '#fdcb6e',
  },
  row: {
    position: 'relative',
    height: 40,
    width: '100%',
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e4f4e2',
    overflow: 'hidden',
  },

  bar: {
    height: 300,
    width: '100%',
    position: 'absolute',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
});
