import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info } from './InfoStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const InfoHeader = () => {
    return(
        <View style={account.header}>
            <TouchableHighlight>
            <MaterialCommunityIcons
            name='close'
            size={45}
            color='#fff'
            />
            </TouchableHighlight>
        </View>
    )
}

const InfoHero = () => {
    return(
        <View style={info.titleContainer}>
            <ImageBackground 
            style={{width:'100%', height:'30vh'}}
            source={require('../Images/sydney.jpg')}/>
            <Text style={info.titleText}>Activities in </Text>
        </View>
    )
}

export default function InfoScreen() {

    return (
        <View style={account.background, {backgroundColor: '#f5f5'}}>
            <InfoHeader/>
            <InfoHero/>
            <View>
                <FlatList/>
                
            </View>
        </View>
    )
}




