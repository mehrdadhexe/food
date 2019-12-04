import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  ImageBackground,
} from 'react-native';
import CounterItem from '../component/CounterItem';
import CardItemShop from '../component/CardItemShop';
import CartBt from '../component/CartBt';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 100;

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      useNativeDriver: true,
      extrapolate: 'clamp',
    });
      const transparent = this.state.scrollY.interpolate({
          inputRange: [0, HEADER_SCROLL_DISTANCE],
          outputRange: [1, -1],
          useNativeDriver: true,
          extrapolate: 'clamp',
      });
    return (
      <View style={style.container}>
        <Animated.View
          style={[
            style.head,
            {
              height: headerHeight,

                zIndex:transparent,
              backgroundImage: { url: '../res/img/slide1.png' },
            },
          ]}>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: '#2522ff' }} />
            <View
              style={{
                flex: 2,
                backgroundColor: '#ff2a23',
                flexDirection: 'row',
              }}>
              <View style={{ flex: 2, backgroundColor: '#5cffeb' }} />
              <View style={{ flex: 3, backgroundColor: '#fbff3d' }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#ff1f3c',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#fff',
                      fontFamily: 'IRANSansWeb_Bold',
                    }}>
                    رستوران سنتی محمدی
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff9f6',
                    flexDirection: 'row',
                  }}>
                  <View style={{ flex: 1, backgroundColor: '#2522ff' }} />
                  <View style={{ flex: 1, backgroundColor: '#fff9f6' }} />
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#000000',
                    flexDirection: 'row',
                  }}>
                  <View style={{ flex: 1, backgroundColor: '#ff1f3c' }} />
                  <View style={{ flex: 1, backgroundColor: '#ffee35' }} />
                </View>
              </View>
            </View>
            <View style={{ flex: 2, margin: 10 }}>
              <Text>
                یک متن ساختگی برای توضیحات مربوط به یک رستوران که در واقع توضیحی
                اجباری برای معرفی رستوران و تمام مواد غذایی ان می باشد
              </Text>
            </View>
          </View>
        </Animated.View>
        <View style={style.cat}>

            <ScrollView

              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
              ])}>
              <CardItemShop
                foodId={1}
                foodTitle={'آبگوشت'}
                foodPrice={'46,000 تومان'}
                foodImage={require('../res/img/slide1.jpg')}
              />
              <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
              <CardItemShop foodImage={require('../res/img/slide3.jpg')} />
              <CardItemShop foodImage={require('../res/img/slide4.jpg')} />
              <CardItemShop foodImage={require('../res/img/slide2.jpg')} />

            </ScrollView>

            <CartBt />
        </View>

      </View>
    );
  }
}

export default ShopPage;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1edf2',
  },
  content: {
    flex: 9,
  },
  cat: {
    flex: 1,
      backgroundColor: '#f21927',
  },
  head: {
    height: 10,

  },
});
