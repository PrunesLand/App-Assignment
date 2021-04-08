import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './WelcomeStyles'

const WelcomeButton = ({title}) => {
    return (
        <TouchableOpacity>
            <View style={styles.Button}>
                <Text style={styles.register}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default WelcomeButton
