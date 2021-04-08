import {StyleSheet} from 'react-native'
import theme from './theme'

export const info = StyleSheet.create({
    titleText:{
        fontSize:'20px'
    },
    titleContainer:{
        height:'10vh',
        width:'100%',
        textAlign:'center',
        padding:'2vh',
        backgroundColor: theme.PRIMARY_COLOR
    }
})