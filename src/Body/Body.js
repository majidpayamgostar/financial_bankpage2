import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Tours from "./Tours";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.BodyMain}>
                <Tours/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    BodyMain: {
        flex: .40,
        backgroundColor:'green',
    }
});