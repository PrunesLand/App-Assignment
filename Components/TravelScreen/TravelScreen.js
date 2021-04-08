import React from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import AppTextInput from '../TextInput/AppTextInput'
import {travel} from './TravelStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Item from './Item'

const Data = [
    {
        id:1,
        city: 'Sydney',
        title:'',
        description:''
    },
    {
        id:2,
        city: 'Melbourne',
        title:'',
        description:''
    },
    {
        id:3,
        city: 'Perth',
        title:'',
        description:''
    },
]



const TravelScreen = () => {

    const renderItem = ({item}) => (
        <View style={travel.renderItems}>
            <Item city={item.city}/>
        </View>
    )

    return (
        <View style={account.background}>
            <View style={account.header}></View>
            <View style={travel.imgContainer}>
                <ImageBackground 
                source={require('../Images/sydney.jpg')}
                style={travel.image}
                 />
                <Text style={travel.imgText}>Travel options</Text>
            </View>
            <View style={account.header}>
                <Text style={travel.listHeader}>List</Text>
            </View>
            <View style={travel.addContainer}>
                <AppTextInput/>
                <TouchableOpacity style={travel.plus}>
                    <MaterialCommunityIcons 
                        name='plus-thick'
                        size={45}
                        color='#1B4332'
                    />
                </TouchableOpacity>
            </View>
            <View style={travel.listContainer}>
                <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </View>
           
        </View>
    )
}

export default TravelScreen
