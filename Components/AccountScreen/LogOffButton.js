import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function LogOffButton({title}) {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'310px',
        height:'61px',
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:'15px'
    },
    text:{
        fontSize:'40px',
        color:'#FF4141'
    }
})