import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './Components/AccountScreen/AccountScreen';
import InfoEditScreen from './Components/InfoEdit/InfoEditScreen';
import InfoScreen from './Components/InformationScreen/InfoScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import RegisterScreen from './Components/RegisterScreen/RegisterScreen';
import TravelScreen from './Components/TravelScreen/TravelScreen';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './Components/Navigation/AuthNavigation';

export default function App() {
  return (
   <NavigationContainer>
     <AuthNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
