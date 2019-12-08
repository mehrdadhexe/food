import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import CounterItem from './CounterItem';
class CardItemShop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#e4f4e2',
          flexDirection: 'row',
          borderRadius: 5,
          height: 130,
          paddingLeft: 5,
          margin: 10,
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Text
            style={{
              flex: 2,
              marginTop: 10,
              fontSize: 20,
              fontFamily: 'IRANSansWeb_Bold',
            }}>
            ابگوشت سنتی
          </Text>
          <Text
            style={{
              flex: 1,
              fontFamily: 'IRANSansWeb_Light',
            }}>
            آبگوشت+سبزیجات+ماست+پیاز+نان
          </Text>

          <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
            <CounterItem />
            <Text style={{ marginRight: 10, fontFamily: 'IRANSansAdad' }}>
              {' '}
              4,500 تومان
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ff0520',
          }}>
          {/*('cover' | 'contain' | 'stretch' | 'repeat' | 'center'*/}

          <Image
            resizeMode={'cover'}
            style={{
              flex: 1,
              width: '100%',
            }}
            source={this.props.foodImage}
          />
        </View>
      </View>
    );
  }
}

export default CardItemShop;
