import React from 'react'
import { View, Text } from 'react-native'
import {account} from './AccountStyles'
import Button from './Button'
import LogOffButton from './LogOffButton'


export default function AccountScreen({username, navigation}) {
    return (
        <View style={account.background}>
            <View style={account.header}>
                <Text style={account.headerText}>Account</Text>
            </View>
            <View style={account.username}>
                <Text style={account.userText}>Hi, {username} </Text>
            </View>
            {/* sydney button is stored */}
            <View style={account.buttonContainer}> 
                <Button title='Sydney' onPress={() => navigation.navigate('travel')}/>
            </View>
            {/* Logout button is stored */}
            <View style={account.logoffContainer}>
                <LogOffButton title='Log off' onPress={() => navigation.navigate('welcome')}/>
            </View>
        </View>
    )
}

