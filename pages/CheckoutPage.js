import React, { Component } from 'react';
import {
  Animated,
  Button,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class CheckoutPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../res/img/food_back.png')}
        style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontFamily: 'IRANSansWeb_Black' }}>صورت حساب</Text>
          </View>
          <View
            style={{
              flex: 2,
              elevation: 4,
              margin: 10,
              borderRadius: 10,
              flexDirection:'column',
              justifyContent:'space-between',
              alignItems:'space-between',
              padding: 10,
              backgroundColor: '#ffffff',
            }}>
            <Text style={{ fontFamily: 'IRANSansWeb_Black',alignSelf:'flex-start' }}>آدرس شما:</Text>
            <Button color={'#ff7675'} title={'تغییر آدرس'}></Button>
          </View>
          <View style={{ flex: 2,marginBottom:10,padding:10, backgroundColor: '#ffffff' }}>
            <Text  style={{flex: 2, fontFamily: 'IRANSansWeb_Black' }}>
              شیوه پرداخت:
            </Text>
            <View style={{flex: 2,flexDirection:'row'}}>
              <View
                  style={{
                    flex: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                <SimpleLineIcons
                    name="credit-card"
                    style={{
                      height: 55,
                      width: 55,
                      borderRadius: 5,
                      paddingLeft: 8,
                      paddingTop: 10,
                      backgroundColor: '#00770e',
                      color: '#fff',
                      marginLeft: 10,
                      fontSize: 35,
                    }}
                />
                <Text
                    style={{
                      position: 'absolute',
                      zIndex: 5,
                      top: 0,
                      height: 25,
                      width: 25,
                      padding: 6,
                      borderRadius: 50,
                      fontSize: 10,
                      marginLeft: 45,
                      backgroundColor: '#ff1713',
                      color: '#474747',
                    }}>
                  9%
                </Text>
                <Text
                    style={{
                      color: '#474747',
                      fontFamily: 'IRANSansWeb_Light',
                      marginLeft:10,
                      fontSize:10,
                    }}>
                  پرداخت اینترنتی
                </Text>
              </View>
              <View style={{flex: 1,marginRight:10,justifySelf:'flex-end',alignSelf:'flex-end'}}>
                <Button  color={'#ff7675'} title={'تغییر آدرس'}></Button>
              </View>

            </View>

          </View>
          <View style={{ flex: 3, padding: 20, backgroundColor: '#ffffff' }}>
            <Text style={{ fontFamily: 'IRANSansWeb_Black' }}>
              سفارشات شما:
            </Text>
            <FlatList
              data={[
                {id:1, key: 'چلو کباب', price:67},
                {id:2, key: 'نوشابه', price:50000},
                { id:3,key: 'چلو کباب', price: 70000 },
                {id:4, key: 'چلو کباب', price:67},
                {id:5, key: 'نوشابه', price:50000},
                { id:6,key: 'چلو کباب', price: 70000 },
                { id:1,key: 'چلو کباب', price:67},
                { id:1,key: 'نوشابه', price:50000},
                { id:1,key: 'چلو کباب', price: 70000 },
                { id:1,key: 'چلو کباب', price:67},
                { id:1,key: 'نوشابه', price:50000},
                { id:1,key: 'چلو کباب', price: 70000 },
              ]}
              renderItem={({item}) => (
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ padding: 5, fontFamily: 'IRANSansWeb_Light' }}>
                    {item.id}{'-'}{item.key}
                  </Text>
                  <Text style={{ padding: 5, fontFamily: 'IRANSansWeb_Light' }}>
                    {item.price+' تومان '}
                  </Text>
                </View>
              )}
            />
          </View>
          <View
            style={{
              flex: 2,
              padding: 20,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'IRANSansWeb_Bold',
                  flex: 1,
                  textAlign: 'left',
                }}>
                جمع کل:
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'IRANSansWeb_Bold',
                  textAlign: 'right',
                }}>
                200 تومان
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'IRANSansWeb_Bold',
                  flex: 1,
                  textAlign: 'left',
                }}>
                تخفیفات:
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'IRANSansWeb_Bold',
                  textAlign: 'right',
                }}>
                0
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'IRANSansWeb_Bold',
                  textAlign: 'left',
                }}>
                جمع نهایی:
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'IRANSansWeb_Bold',
                  textAlign: 'right',
                }}>
                200 تومان
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00b894',
            }}>
            <TouchableOpacity onPress={this.showCheckout}>
              <Text
                style={{ fontFamily: 'IRANSansWeb_Bold', color: '#fcffea' }}>
                پرداخت و ثبت نهایی
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
