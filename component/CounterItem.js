import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
let count = 0;
class CounterItem extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
    this._kamkardn = this._kamkardn.bind(this);
    this._ziadkardan = this._ziadkardan.bind(this);
  }
  _kamkardn() {
    let get_count =  this.state.price;

      if(get_count>=1)
         this.setState({ price: get_count - 1 });
  }
  _ziadkardan() {
    this.setState({ price: this.state.price + 1 });
  }

  render() {
    count = this.state.price;
    return (
      <View
        style={{
          width: 150,
          height: 50,
          flex: 1,

          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View />
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: 10,
            backgroundColor: '#e0e0e0',
          }}>
          <Text
            onPress={this._ziadkardan}
            style={{ fontSize: 40, padding: 10, color: 'green' }}>
            +
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 30, fontFamily: 'IRANSansWeb_Light' }}>
            {count}
          </Text>
        </View>
        <View style={{}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              margin: 10,
              backgroundColor: '#e0e0e0',
            }}>
            <Text
              onPress={this._kamkardn}
              style={{ fontSize: 40, padding: 15, color: 'red' }}>
              -
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CounterItem;
