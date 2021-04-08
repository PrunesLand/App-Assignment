import {StyleSheet} from 'react-native'

export const RegStyles = StyleSheet.create({
    container:{
        width:'100%',
        height: '70vh',
        position: 'absolute',
        top: '30vh',
        padding: '3vh'
    },
    title:{
        fontSize:'40px',
        color:'#fff'
    }
})

export const logoStyle = StyleSheet.create({
    container:{
        height:'35vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
})

export const square = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(45, 106, 79, 0.9)',
        height:'100%',
        width: '100%',
        alignItems:'center',
        borderRadius:'15px',
    }
})

export const regButton = StyleSheet.create({
    Button:{
        height:'60px',
        width:'200px',
        borderRadius:'15px',
        backgroundColor: '#1B4332',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    register:{
        fontSize:'20px',
        color:'#fff'
    }
})