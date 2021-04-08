import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from '../RegisterScreen/RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from '../TextInput/AppTextInput'
import RegLogButton from '../RegisterScreen/RegLogButton'
import {Login} from './LoginStyles'

const LoginScreen = () => {
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
                <View style={Login.container}>
                        <View style={square.container}>
                            <Text style={RegStyles.title}>Login</Text>
                            <AppTextInput description='Name:' />
                            <AppTextInput description='Password:' textContentType='password' />
                            <RegLogButton title='Login'/>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
