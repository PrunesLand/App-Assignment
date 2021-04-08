import React from 'react'
import { View, Text } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { edit } from './InfoEditStyles'


export default function InfoEditScreen({title, description}) {
    return (
        <View style={account.background}>
            <View>
                <Text>Title:</Text>
                <View></View>               
            </View>
            <View>
                <Text>Description:</Text>
                <View></View>
            </View>
            <View>
                {/* add button here */}
            </View>
            <View>
                {/* cancel button here */}
            </View>
        </View>
    )
}
