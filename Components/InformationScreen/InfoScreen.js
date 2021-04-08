import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info } from './InfoStyles'

function TestComp(){
    return(
    <View>
        <Text >
            test
        </Text>
    </View>
    )
}

export default function InfoScreen({city}) {

    return (
        <View style={account.background, {backgroundColor: '#f5f5'}}>
            <View style={account.header}></View>
            <View style={info.titleContainer}>
                <Text style={info.titleText}>Activities in {city}</Text>
            </View>
            <View>
                <FlatList/>
                <TestComp/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})


