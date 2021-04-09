import React from 'react'
import {  ImageBackground, Text, View} from 'react-native'
import {styles} from './WelcomeStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import WelcomeButton from './WelcomeButton'

function WelcomeScreen({navigation}) {
    return (
        <View  >
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            
            
            />
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Travel</Text>
                    <Text style={styles.title}>Wiki</Text>
                </View>

                <View style={styles.logoContainer}>
                    <View style={styles.Logo}>
                        <MaterialCommunityIcons 
                            name='airplane'
                            size={160}
                            color='#fff'
                            
                            
                        />
                    </View>
                </View>
                <View style={styles.bgContainer}>
                
                    <View style={styles.square}>
                        <View>
                            <Text style={styles.textStyle}>New member? Register here:</Text>
                            <WelcomeButton title='Register' onPress={() => navigation.navigate('register')} />
                        </View>
                        <View>
                            <Text style={styles.textStyle}>Already a member? Login here:</Text>
                            <WelcomeButton title='Login' onPress={() => navigation.navigate('login')}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}



export default WelcomeScreen
