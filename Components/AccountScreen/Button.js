import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({title, color}) {
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
        width:'309px',
        height:'45px',
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:'15px',
        
    },
    text:{
        fontSize:'30px',
        color:'#fff',
    }
})
