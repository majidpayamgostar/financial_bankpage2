import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HeaderMiddle extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Middle</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .66,
        backgroundColor:'violet'
    }
});