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
        
    },
    travelHeader:{
        height:'10vh',
        width:'100%',
        backgroundColor:'#2D6A4F',
        display:'flex',
        flexDirection:'row'
        
    },
    back:{
        height:'100%',
        width:'10vh',
        position:'absolute',
        display:'flex',
        justifyContent:'center'
    },
    account:{
        height:'100%',
        width:'10vh',
        position:'absolute',
        left:'45px',
        display:'flex',
        justifyContent:'center'
    },
    headerTextContainer:{
        height:'100%',
        width:'100%',
        textAlign:'center',
        display:'flex',
        justifyContent:'center'
    },
    headerText:{
        color:'#fff',
        fontSize:'40px'
    }
})

export const filter = StyleSheet.create({
    container:{
        height:'10vh',
        width:'100%',
        backgroundColor:'#B7E4C7',
        borderBottomWidth: '3px',
        borderColor: '#2D6A4F'
    },
    selector:{
        height:'5vh',
        width:'20vh',
        backgroundColor:'#f5f5',
        color:'#fff'
    }
})