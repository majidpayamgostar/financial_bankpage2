import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class HeaderDown extends Component {
    render() {
        return (
            <View style={styles.HeaderDownStyle}>
                <View style={styles.headerDownButtons}>
                    <View style={styles.headerDownButton}>
                        <Image
                            source={require('../image/alarm.png')}
                        />
                        <Text style={{fontWeight: 'bold'}}>Report Stolen</Text>
                    </View>
                    <View style={styles.headerDownButton}>
                        <Image
                            source={require('../image/shield.png')}
                        />
                        <Text style={{fontWeight: 'bold'}}>Change Pin</Text>
                    </View>
                    <View style={styles.headerDownButtonDots}>
                        <Text style={{fontSize: 50,marginBottom: 35,fontWeight: '900',color:'black'}}>...</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    HeaderDownStyle: {
        flex: .16,
    },
    headerDownButtons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    headerDownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#eff0f4',
        width:110,
        height:40,
        borderRadius:7,
    },
    headerDownButtonDots: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eff0f4',
        width:50,
        height:40,
        borderRadius:7,
    },
});