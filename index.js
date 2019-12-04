import React, {Component} from 'react';
import {AppRegistry, Dimensions} from 'react-native';
//import {createDrawerNavigator} from 'react-navigation-drawer';
//import {DrawerNavigator} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import SideMenu from './SideMenu/SideMenu';
import stackNav from './app/stacknav';
import MainScreen  from './app/MainScreen';
import App from './App';
import {name as appName} from './app.json';
import Shop from './pages/Shop';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
//
// const drawernav = createDrawerNavigator(
//   {
//     Item1: {
//       screen: stackNav,
//     },
//   },
//   {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,
//   },
// );

AppRegistry.registerComponent(appName, () => CartPage);
