import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CartPage from '../pages/CartPage';
import ShopPage from '../pages/ShopPage';
import MainPage from '../pages/MainPage';
import CheckoutPage from '../pages/CheckoutPage';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
          key="checkout_page"
          component={CheckoutPage}
          hideNavBar={true}

          title="CheckoutPage"
      />
      <Scene
        key="cart_page"
        component={CartPage}
        hideNavBar={true}
        title="CartPage"
      />

      <Scene
        key="shop_page"
        component={ShopPage}
        hideNavBar={true}
        title="ShopPage"
      />
      <Scene
        key="main_page"
        component={MainPage}
        hideNavBar={true}
        initial={true}
        title="MainPage"
      />
    </Scene>

  </Router>
);
export default Routes;
