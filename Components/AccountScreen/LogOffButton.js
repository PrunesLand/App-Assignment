import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function LogOffButton({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'310px',
        height:'81px',
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:'15px',
        borderRadius:'15px',
        borderWidth: '5px',
        borderColor: '#1B4332',
    },
    text:{
        fontSize:'45px',
        color:'#FF4141'
    }
})