import React from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import AppTextInput from '../TextInput/AppTextInput'
import {travel,filter} from './TravelStyles'
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

const TravelHeader = () => {
    return(
        <View style={travel.travelHeader}>
                

                <View style={travel.back} >
                    <MaterialCommunityIcons
                    name='chevron-left'
                    size={60}
                    color='#fff'
                    />
                </View>
                
                <View style={travel.account}>
                    <MaterialCommunityIcons
                    name='account-circle'
                    size={45}
                    color='#fff'
                    />
                </View>
                <View style={travel.headerTextContainer}>
                    <Text style={travel.headerText}>Travels</Text>
                </View>
        
        </View>
    )
}

const Filter = () => {
    return(
        <View style={filter.container}>
            <View>
                
            </View>
        </View>
    )
}


const TravelScreen = () => {

    const renderItem = ({item}) => (
        <View style={travel.renderItems}>
            <Item city={item.city}/>
        </View>
    )

    return (
        <View style={account.background}>
            <TravelHeader/>
            <Filter/>
            
            
            
            {/* <View style={travel.listContainer}>
                <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </View> */}
           
        </View>
    )
}

export default TravelScreen
