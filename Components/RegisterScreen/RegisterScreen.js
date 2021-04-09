import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from './RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from '../TextInput/AppTextInput'
import RegLogButton from './RegLogButton'
import { TouchableHighlight } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const RegisterExit = ({onPress}) => {
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

const RegisterScreen = ({navigation}) => {
    return (
        <View>
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            />
            <RegisterExit navigation={() => navigation.goBack()}/>
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
                            <RegLogButton title='Register' onPress={() => navigation.navigate('welcome')}/>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen
