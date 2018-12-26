import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FontSize} from '../Styles/Main'

export default class HeaderTop extends Component {
    render() {
        return (
            <View style={styles.headerTop}>
                <View style={styles.headerStyle}><Text style={FontSize.fontWeightBold}>Cards</Text></View>
                <View style={styles.imageStyle}>
                    <Image
                        source={require('../image/magnifier.png')}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerTop: {
        flex: .14,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerStyle: {
        backgroundColor: 'skyblue'
    },
    imageStyle:{
        backgroundColor:'lightcyan'
    }
});