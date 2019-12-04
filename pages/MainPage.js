import React from 'react';
import Drawer from 'react-native-drawer';
import MainScreen from '../app/MainScreen';
import DetailScreen from '../app/DetailScreen';
import { ScrollView, StatusBar, View, TouchableOpacity } from 'react-native';
import HeaderStyle from '../style/Header.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SliderBox } from 'react-native-image-slider-box';
import Search from '../component/Search';
import { Actions } from 'react-native-router-flux';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      images: [
        'https://www.mamanpaz.ir/files/image/food/12/04/2016/79ea860e-993c-4ea4-a52f-06328c30949b_600.jpg',
        'http://khabarfoori.com/bundles/data/images/5cf64640daba7_2019-06-04_14-51.jpeg',
        'https://blog.okala.com/wp-content/uploads/2019/06/%DA%A9%D8%A8%D8%A7%D8%A8-%D8%AA%D8%B1%D8%B4-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86%DB%8C.jpg',
        'https://www.tasvirezendegi.com/wp-content/uploads/2016/09/tasvirezendegi-ir-718.jpg',
      ],
    };
  }

  openMenu = () => {
    // require('../res/img/slide1.jpg')
    this.setState({
      drawer: true,
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Drawer
          type="overlay"
          content={<DetailScreen />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={0}
          negotiatePan={true}
          styles={drawerStyles.drawer}
          open={this.state.drawer}
          tweenHandler={ratio => ({
            main: { opacity: (4 - ratio) / 4 },
            mainOverlay: { opacity: (2 - ratio) / 2 },
          })}>
          <View style={HeaderStyle.header}>
            <SliderBox
              sliderBoxHeight={200}
              paginationBoxVerticalPadding={0}
              paginationBoxStyle={HeaderStyle.dotStyle}
              style={HeaderStyle.slider}
              images={this.state.images}
            />
            <TouchableOpacity style={HeaderStyle.btr} onPress={this.openMenu}>
              <SimpleLineIcons style={HeaderStyle.icon_headr} name="menu"  />
            </TouchableOpacity>
            <TouchableOpacity style={HeaderStyle.btl} onPress={()=>{Actions.cart_page()}}>
              <SimpleLineIcons name="basket-loaded" style={HeaderStyle.icon_headr} />
            </TouchableOpacity>

          </View>

          <Search />
          <View style={drawerStyles.scrollWarp}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <MainScreen />

            </ScrollView>
          </View>
        </Drawer>
      </>
    );
  }
}

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  scrollWarp: {
    position: 'relative',
    top: -135,
    zIndex: 1,
  },
  main: { paddingLeft: 0 },
};
export default MainPage;
