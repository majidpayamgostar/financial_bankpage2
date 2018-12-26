import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icons from "./Icon";

export default class Footer extends Component {
    render() {
        const icons = [
            {
                image: require('../image/internet.png'),
            },
            {
                image: require('../image/settings-work-tool.png'),
            },
            {
                image: require('../image/envelope.png'),
            },
            {
                image: require('../image/plane.png'),
            },
            {
                image: require('../image/clock-with-white-face.png'),
            }
        ];
        return (
            <View style={styles.footerMain}>
                <View style={styles.footerIcons}>
                    {
                        icons.map((icon, i) => <Icons icon={icon} key={i}/>)
                    }
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footerMain: {
        flex: .08,
        backgroundColor: 'white',
        elevation: 15
    },
    footerIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});