import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636e72',
    direction: 'rtl',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 22,
  },
  head: {
    textAlign: 'center',
    fontFamily: 'IRANSansWeb_Bold',
    color: '#fdcb6e',
    marginBottom: 20,
    width: '100%',
  },
  item: {
    paddingRight: 20,
    fontFamily: 'IRANSansWeb_Bold',
    fontSize: 18,
    height: 44,
  },
});

class DetailScreen extends Component {
  openPage(item) {
    if (item == 'cart_page') {
      Actions.cart_page();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>برنامه فود شهر در حال ساخت</Text>
        <FlatList
          data={[
            { key: 'پروفایل', event: '' },
            { key: 'سبد خرید', event: '' },
            { key: 'درباره ما', event: '' },
            { key: 'خروج', event: 'cart_page' },
          ]}
          renderItem={({ item }) => (
            <Text onPress={this.openPage(item.event)} style={styles.item}>
              {item.key}
            </Text>
          )}
        />
      </View>
    );
  }
}

export default DetailScreen;
