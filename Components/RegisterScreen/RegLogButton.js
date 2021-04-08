import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { regButton } from './RegisterStyles'

const RegLogButton = ({title}) => {
    return (
        <TouchableOpacity>
            <View style={regButton.Button}>
                <Text style={regButton.register}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default RegLogButton
