import {StyleSheet} from 'react-native'

export const account = StyleSheet.create({
    header:{
        height:'10vh',
        width:'100%',
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        
    },
    headerText:{
        textAlign:'center',
        color:'#fff',
        fontSize:'40px', 
    },
    username:{
        height:'25vh',
        width:'100%',
        display:'flex',
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    userText:{
        fontSize:'30px',
        color:'#2D6A4F',
    
    },  
    buttonContainer:{
        height:'50vh',
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        textAlign:'center',
        alignItems:'center',
       
    },
    logoffContainer:{
        height:'15vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        
        
    },
    background:{
        height:'100%',
        width:'100%',
        backgroundColor:'#B7E4C7'
    }
    
    
})