import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default class Tour extends Component {
    render() {
        const {tour} = this.props;
        return (
            <View style={styles.toursStyle}>
                <View style={styles.dateView}>
                    <Text style={styles.numberStyle}>{tour.dateDay}</Text>
                    <Text style={{color: 'black'}}>{tour.dateMonth}</Text>
                </View>
                <View style={styles.detailsWrapper}>
                    <View style={styles.nameTour}>
                        <Text style={styles.tourTitle}>{tour.tourTitle}</Text>
                        <Text style={styles.tourSubTitle}>{tour.tourSubTitle}</Text>
                    </View>
                    <View>
                        <Text style={styles.priceStyle}>{tour.tourPrice}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    toursStyle: {
        flex: 1,
        backgroundColor: '#f9fafc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70
    },
    nameTour: {
        // paddingRight: 70
    },
    numberStyle: {
        fontSize: 22,
        color: '#574aff',
        fontWeight: 'bold',
    },
    tourTitle: {
        color: 'black',
        fontSize: 17,
    },
    priceStyle: {
        fontSize: 18,
        color: '#828393',
        fontWeight: '400',
    },
    dateView: {
        borderRightColor: '#e7e7e7',
        borderRightWidth: 1,
        paddingHorizontal: 15
    },
    tourSubTitle: {
        color: '#b8b9c5',
        fontWeight: 'bold',
        fontSize: 13
    },
    detailsWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
});