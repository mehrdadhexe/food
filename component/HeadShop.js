import styles from '../style/search.style';
import React from 'react';
import { Text, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
class HeadShop extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SimpleLineIcons name="magnifier" style={styles.btl} />
                <Text  style={styles.text} >جست و جو کنید</Text>
            </View>
        );
    }
}

export default HeadShop;
