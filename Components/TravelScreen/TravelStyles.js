import {StyleSheet} from 'react-native'

export const travel = StyleSheet.create({
    imgContainer:{
        height:'30vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
        

    },
    listContainer:{
        height:'30vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    listHeader:{
        fontSize:'30px',
        textAlign:'center',
        color:'#fff'
    },
    addContainer:{
        height:'15vh',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:'2vh'
        
    },
    plus:{
        top:'1.2vh',
        left:'1vh'
    },
    image:{
        width:'100%',
        height:'100%',
        opacity: '70%'
        
    },
    imgText:{
        position:'absolute',
        fontSize:'40px',
        color:'#fff',
        
    },
    renderItems:{
        height:'10vh',
        width:'100%',
        
    }
})