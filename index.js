import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { name as appName } from './app.json';
import Routes from './Routes/Routes';
class index extends Component {
  render() {
    return <Routes />;
  }
}
export default index;
AppRegistry.registerComponent(appName, () => index);
