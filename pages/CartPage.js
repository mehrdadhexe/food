import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  Button,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class CartPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../res/img/food_back.png')}
        style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              elevation: 10,
              height: 60,
              shadowColor: '#474747',
              shadowOffset: 45,
              backgroundColor: '#fcffea',
            }}>
            <View />
          </View>

          <View style={{ flex: 3, backgroundColor: 'transparent' }}>
            <View
              style={{
                flex: 3,
                margin: 15,
                elevation: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}>
              <TextInput
                style={{
                  padding: 20,
                  fontFamily: 'IRANSansWeb_Light',
                  textAlign: 'right',
                  direction: 'rtl',
                }}
                placeholderTextColor={'#bbbbbb'}
                placeholder={'آدرس دقیق خود را وارد کنید'}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 3,
                margin: 5,
                elevation: 10,
                borderRadius: 5,
                padding: 3,
                backgroundColor: '#fcffea',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <SimpleLineIcons
                  name="home"
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: 10,
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
                    color: '#474747',
                    paddingLeft: 10,
                    fontFamily: 'IRANSansWeb_Light',
                    fontSize: 18,
                  }}>
                  پرداخت درب منزل
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
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
                    paddingLeft: 10,
                    fontFamily: 'IRANSansWeb_Light',
                    fontSize: 18,
                  }}>
                  پرداخت اینترنتی
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                margin: 5,
              }}>
              <Image
                resizeMode={'contain'}
                style={{ width: 40, height: 40 }}
                source={require('../res/img/post.png')}
              />
              <Text style={{ fontFamily: 'IRANSansWeb_Black' }}>هزینه پیک</Text>
              <Text style={{ fontFamily: 'IRANSansWeb_Black' }}>400 تومان</Text>
            </View>
          </View>
          <View
            style={{
              flex: 4,
              padding: 20,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb_Light',
                fontSize: 18,
              }}>
              کاربر گرامی لطفا در صورت کد تخفیف آنرا در فیلد زیر وارد نمایید و
              هدیه دریافت نمایید
            </Text>

            <View
              style={{
                flex: 1,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  backgroundColor: '#474747',
                  fontFamily: 'IRANSansWeb_Light',
                  marginRight: 10,
                  color: '#fff',
                  fontSize: 12,
                  paddingLeft: 10,
                  paddingRight: 10,
                  width: 160,

                  height: 35,
                  textAlign: 'right',
                  direction: 'rtl',
                }}
                placeholderTextColor={'#f1edf2'}
                placeholder={'کد تخفیف خود را وارد کنید'}
              />
              <Button
                color={'#5cf262'}
                style={{ paddingLeft: 60, height: 20 }}
                title={'ثبت'}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  fontFamily: 'IRANSansWeb_Bold',
                  flex: 1,
                  textAlign: 'left',
                }}>
                جمع کل:
              </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>200 تومان</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  fontFamily: 'IRANSansWeb_Bold',
                  flex: 1,
                  textAlign: 'left',
                }}>
                تخفیفات
              </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>0</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'IRANSansWeb_Bold',
                  textAlign: 'left',
                }}>
                جمع نهایی
              </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>200 تومان</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#79ffc0',
            }}>
            <Text style={{ fontFamily: 'IRANSansWeb_Bold', color: '#bebebe' }}>
              مشاهده صورت حساب
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default CartPage;
