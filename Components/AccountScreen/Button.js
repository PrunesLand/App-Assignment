import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({title, color, onPress}) {
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
        width:'309px',
        height:'60px',
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:'15px',
        borderWidth: '5px',
        borderColor: '#1B4332',
       
        
    },
    text:{
        fontSize:'30px',
        color:'#fff',
        padding: '15px'
        
    }
})
