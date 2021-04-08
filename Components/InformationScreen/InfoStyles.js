import {StyleSheet} from 'react-native'
import theme from './theme'

export const info = StyleSheet.create({
    titleText:{
        fontSize:'40px',
        color:'#FFF',

    },
    HeroContainer:{
        height:'30vh',
        width:'100%',
        textAlign:'center',
        backgroundColor:'#2D6A4F'
    },
    hero:{
        width:'100%',
        height:'30vh',
        position:'absolute',
        opacity:'50%'
    },
    textContainer:{
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    setDate:{
        display:'flex',
        flexDirection:'row',
        height:'5vh',
        alignItems:'center'
    },
    locationContainer:{
        height:'12vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:'5px',
        borderColor:'#FFF'
        
    },
    locationTitle:{
        display:'flex',
        flexDirection:'row',
        bottom:'10px'
    },
    locationTitleText:{
        fontSize:'25px'
    }
})

export const description = StyleSheet.create({
    header:{
        width:'100%',
        height:'5vh',
        display:'flex',
        flexDirection:'row',
        padding:'10px'
    },
    title:{
        fontSize:'20px'
    }
})