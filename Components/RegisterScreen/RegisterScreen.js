import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from './RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from '../TextInput/AppTextInput'
import RegLogButton from './RegLogButton'

const RegisterScreen = () => {
    return (
        <View>
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            />
            <View>
                <View style={logoStyle.container}>
                    <View style={styles.Logo}>
                        <MaterialCommunityIcons 
                            name='airplane'
                            size={160}
                            color='#fff'
                            />
                    </View>
                </View>
                <View style={RegStyles.container}>
                        <View style={square.container}>
                            <Text style={RegStyles.title}>Register</Text>
                            <AppTextInput description='Name:' />
                            <AppTextInput description='Email:' textContentType='emailAddress'/>
                            <AppTextInput description='Password:' textContentType='password' />
                            <RegLogButton title='Register'/>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen
