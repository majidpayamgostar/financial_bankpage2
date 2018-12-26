import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HeaderTop extends Component {
    render() {
        return (
            <View style={styles.headerTitle}>
                <Text style={{fontSize:20,color:'black',borderBottomColor:'#5245ff',borderBottomWidth: 2,height:44}}>Cards</Text>
                <Image
                    style={styles.magnifier}
                    source={require('../image/magnifier.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerTitle:{
        flex:.10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 13,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
        backgroundColor:'#f9fafc'
    },
    magnifier:{
        margin: 8
    }
});