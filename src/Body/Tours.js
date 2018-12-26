import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Tour from "./Tour";

export default class Tours extends Component {
    render() {
        const tour = [
            {
                dateDay: '17',
                dateMonth: 'Dec',
                tourTitle: 'Jetstar',
                tourSubTitle: 'Surry Hills,Sydney',
                tourPrice: '-$118.45'
            },
            {
                dateDay: '17',
                dateMonth: 'Dec',
                tourTitle: 'Uber',
                tourSubTitle: 'Circular key Station,Sydney',
                tourPrice: '-$18.45'
            },
            {
                dateDay: '17',
                dateMonth: 'Dec',
                tourTitle: 'Deliveroo',
                tourSubTitle: 'Kings Cross,Sydney',
                tourPrice: '-$118.45'
            },
            {
                dateDay: '17',
                dateMonth: 'Dec',
                tourTitle: 'Telstra',
                tourSubTitle: '117 Telcorp Ave,Sydney',
                tourPrice: '-$118.45'
            },
            {
                dateDay: '17',
                dateMonth: 'Dec',
                tourTitle: 'Spotify',
                tourSubTitle: '112 Act St,Ultimo,Sydney',
                tourPrice: '-$118.45'
            }
        
        ];
        return (
            <View style={styles.TourStyle}>
                <View style={styles.tourDetail}>
                    <Text style={{color: '#b9b9c9'}}>See Activity</Text>
                    <Text style={{color: 'black'}}>View All</Text>
                </View>
                <View style={{flex:1}}>
                    <ScrollView>
                        {
                            tour.map((tour, i) => <Tour tour={tour} key={i}/>)
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    TourStyle: {
        flex: 1,
    },
    tourDetail: {
        flex: .2,
        backgroundColor: '#f2f2f6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
        height: 200
    }
});