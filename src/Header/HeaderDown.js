import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HeaderDown extends Component{
    render(){
        return(
            <View style={styles.className}><Text>Down</Text></View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .16,
        backgroundColor:'wheat',
    }
});