import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Tabs from 'react-native-tabs';
import CardItemShop from '../component/CardItemShop';
import CartBt from '../component/CartBt';
import HeaderStyle from '../style/Header.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 300;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 100;

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      page: 'first',
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

              zIndex: transparent,
              backgroundImage: { url: '../res/img/slide1.jpg' },
            },
          ]}>
          <View
            style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <ImageBackground
              blurRadius={5}
              source={require('../res/img/slide3.jpg')}
              style={{ width: '100%', height: '100%' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={HeaderStyle.btr}
                  onPress={this.openMenu}>
                  <SimpleLineIcons style={HeaderStyle.icon_headr} name="menu" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={HeaderStyle.btl}
                  onPress={() => {
                    Actions.cart_page();
                  }}>
                  <SimpleLineIcons
                    name="basket-loaded"
                    style={HeaderStyle.icon_headr}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                }}>
                <View style={{ flex: 2 }}>
                  <Image
                    resizeMode={'contain'}
                    style={{
                      width: 110,
                      flex: 1,
                      borderRadius: 40,
                      alignSelf: 'flex-end',
                      justifySelf: 'flex-end',
                      height: 110,
                    }}
                    source={require('../res/img/slide1.jpg')}
                  />
                  <Text
                    style={{
                      position: 'absolute',
                      padding: 2,
                      flex: 1,
                      borderRadius: 40,
                      alignSelf: 'flex-end',
                      right: 95,
                      top: 70,
                      backgroundColor: '#55E6C1',
                    }}>
                    5.6
                  </Text>
                </View>
                <View style={{ flex: 3 }}>
                  <View
                    style={{
                      flex: 1,
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

                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        paddingLeft: 10,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <SimpleLineIcons
                        name="check"
                        style={HeaderStyle.icon_headr}
                      />
                      <Text style={{ fontSize: 12 }}>آماده سرویس دهی</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <SimpleLineIcons
                        name="clock"
                        style={HeaderStyle.icon_headr}
                      />
                      <Text style={{ fontSize: 12 }}>20 الی 45 دقیقه</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <SimpleLineIcons
                        name="cup"
                        style={HeaderStyle.icon_headr}
                      />
                      <Text style={{ fontSize: 12 }}>وعده نهار و شام</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          borderWidth: 1,
                          padding: 1,
                          paddingRight: 10,
                          textAlign: 'center',
                          alignSelf: 'center',
                          justifySelf: 'flex-end',

                          paddingLeft: 10,
                          borderColor: '#67bd67',
                          fontSize: 12,
                        }}>
                        %20
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 3, margin: 10 }}>
                <Text
                  style={{ color: '#fff', fontFamily: 'IRANSansWeb_Light' }}>
                  یک متن ساختگی برای توضیحات مربوط به یک رستوران که در واقع
                  توضیحی اجباری برای معرفی رستوران و تمام مواد غذایی ان می باشد
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}
                    onPress={this.openMenu}>
                    <SimpleLineIcons
                      style={{ color: '#ffffff', fontSize: 25 }}
                      name="cup"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#fff',
                        fontFamily: 'IRANSansWeb_Bold',
                      }}>
                      منو غذا
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}
                    onPress={this.openMenu}>
                    <SimpleLineIcons
                      style={{ color: '#ffffff', fontSize: 25 }}
                      name="envelope"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#fff',
                        fontFamily: 'IRANSansWeb_Bold',
                      }}>
                      نظرات
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}
                    onPress={this.openMenu}>
                    <SimpleLineIcons
                      style={{ color: '#ffffff', fontSize: 25 }}
                      name="info"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#fff',
                        fontFamily: 'IRANSansWeb_Bold',
                      }}>
                      اطلاعات
                    </Text>
                  </TouchableOpacity>
                </View>
                <View />
                <View />
              </View>
            </ImageBackground>
          </View>

          <Tabs
            selected={this.state.page}
            style={{ backgroundColor: 'white' }}
            selectedStyle={{ color: 'red' }}
            onSelect={el => this.setState({ page: el.props.name })}>
            <Text style={{ fontFamily: 'IRANSansWeb_Bold' }} name="first">
              همه غذا ها
            </Text>
            <Text style={{ fontFamily: 'IRANSansWeb_Bold' }} name="second">
              پیش غذا
            </Text>
            <Text style={{ fontFamily: 'IRANSansWeb_Bold' }} name="third">
              خورشت
            </Text>
            <Text
              style={{ fontFamily: 'IRANSansWeb_Bold' }}
              name="fourth"
              selectedStyle={{ color: 'green' }}>
              کباب
            </Text>
            <Text style={{ fontFamily: 'IRANSansWeb_Bold' }} name="fifth">
              نوشیدنی ها
            </Text>
          </Tabs>
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
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
            <CardItemShop foodImage={require('../res/img/slide2.jpg')} />
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
    backgroundColor: 'rgba(154,236,219,0.2)',
  },
  head: {
    height: 10,
  },
});
