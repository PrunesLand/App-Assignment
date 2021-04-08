import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'

export default function Item({city}) {
    return (
        <TouchableOpacity>
            <View style={item.container}>
                <Text style={item.text}>{city}</Text>
            </View>
        </TouchableOpacity>
    )
}

const item = StyleSheet.create({
    container:{
        height:'55px',
        width:'329px',
        backgroundColor:'#2D6A4F',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#1B4332',
        borderWidth:'6px'

    },
    text:{
        fontSize:'20px',
        color:'#fff'
    }
})
