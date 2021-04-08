
import {  StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        
        height:'100vh',
        flex: 1,
        shadowOpacity:'#B7E4C7',
        opacity:'60%'
        
        
    },
    titleContainer:{
        width:'100%',
        height:'15vh',
        alignContent:'center',
        justifyContent:'center',
        paddingTop:'5vh'
    },
    title: {
        fontFamily: 'Roboto Mono',
        fontSize: '70px',
        textAlign: 'center',
        color:'#1B4332'
        
        
    },
    square:{
        backgroundColor: 'rgba(45, 106, 79, 0.9)',
        height:'100%',
        width: '100%',
        alignItems:'center',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'space-evenly'
        
    },
    
    bgContainer:{
        width:'100%',
        height: '50vh',
        position: 'absolute',
        top: '48vh',
        padding: '3vh'
    },
    textStyle:{
        textAlign:'center',
        color:'#fff',
        fontSize:'20px',
        padding:'15px'
    },
    logoContainer: {
        height:'35vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'5vh'
    },
    Logo:{
        height:'199px',
        width:'192px',
        backgroundColor:'#2D6A4F',
        borderRadius: '50%',
        textAlign: 'center',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'5px',
        borderWidth:'13px',
        borderColor:'#1B4332'
    },
    Button:{
        height:'80px',
        width:'341px',
        borderRadius:'15px',
        backgroundColor: '#1B4332',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
        
        
        
    },
    register:{
        fontSize:'40px',
        color:'#fff'
    }
 
 })