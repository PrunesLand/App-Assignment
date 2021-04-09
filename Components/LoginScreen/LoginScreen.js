import React from 'react'
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from '../RegisterScreen/RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from '../TextInput/AppTextInput'
import RegLogButton from '../RegisterScreen/RegLogButton'
import {Login} from './LoginStyles'
import {useNavigation} from '@react-navigation/native'

export const LoginExit = ({onPress}) => {
    return(
        
        <View style={RegStyles.closeContainer}>
        <TouchableHighlight onPress={onPress}>
            <MaterialCommunityIcons
            name='close'
            style={RegStyles.close}
            />
        </TouchableHighlight>
        </View>
    )
}

const LoginScreen = ({navigation}) => {
    return (
        <View>
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            />
            <LoginExit onPress={() => navigation.goBack()}/>
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
                            <RegLogButton title='Login' onPress={() => navigation.navigate('account')}/>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
