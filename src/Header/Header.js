import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderTop from "./HeaderTop";
import HeaderDown from "./HeaderDown";
import HeaderMiddle from "./HeaderMiddle";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderTop/>
                <HeaderMiddle/>
                <HeaderDown/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: .46,
    },

});