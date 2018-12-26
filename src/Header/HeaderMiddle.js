import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Styles} from '../Styles/Main'

export default class HeaderMiddle extends Component {
    render() {
        return (
            <View style={styles.headerMiddle}>
                <View style={styles.mainHeaderMiddle}>
                    <View style={styles.visaCard}>
                        <Image
                            source={require('../image/logovisa.png')}
                            style={styles.imageStyle}
                        />
                        <Text style={[{color: 'white'}, Styles.fontWeightBold, {margin: 10}]}>PHYSICAL CARD</Text>
                    </View>
                    <View style={styles.cardDetail}><Text style={styles.textStyle}>AMANDA KLEIN</Text></View>
                    <View style={[styles.cardDetail, {justifyContent: 'flex-start'}]}>
                        <Text style={styles.textStyle}>****</Text>
                        <Text style={styles.textStyle}>****</Text>
                        <Text style={styles.textStyle}>****</Text>
                        <Text style={styles.textStyle}>6789</Text>
                    </View>
                    <View style={[styles.cardDetail,styles.footerText]}>
                        <Text style={[styles.textStyle,Styles.fontColorGrey]}>VALID</Text>
                        <Text style={styles.textStyle}>09/17</Text>
                        <Text style={[styles.textStyle,Styles.fontColorGrey]}>EXP</Text>
                        <Text style={styles.textStyle}>12/19</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerMiddle: {
        flex: .74,
        backgroundColor: '#f9fafc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeaderMiddle: {
        flex: .95,
        alignItems: 'center',
        backgroundColor: '#5245ff',
        borderRadius: 10,
        width: 350,
    },
    visaCard: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 70,
        height: 70,
    },
    cardDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        paddingVertical: 7
    },
    textStyle: {
        color: 'white',
        marginLeft: 15,
        fontSize: 15,
        letterSpacing: 2
    },
    footerText:{
        justifyContent:'flex-start',
    }
    
});