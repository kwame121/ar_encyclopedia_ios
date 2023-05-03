import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet,View,TouchableOpacity,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { defaultScheme } from '../../Utils/constants';

const AxisControls = ({onclick,selected}) => {
 
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-between',
        padding:10,
        borderRadius:20,
        marginTop:10
    },
});

const getTextStyle = (axis) =>{
    return ({
        color:axis == selected?defaultScheme.defaultColor:'white',
        fontSize:18
    })
}

const getContainerStyle = (axis) => {
    return ({
        padding:10,
        borderRadius:10,
        backgroundColor:axis == selected?'black':'transparent',
        width:60,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'row'
    })
}
  return (
    <BlurView blurType={'dark'} style={styles.container}>
        <TouchableOpacity style={getContainerStyle('X')} onPress={()=>{onclick('X')}} >
        <Feather name="arrow-down" color={selected=='X'?defaultScheme.defaultColor:'white'} size={15}/>
        <Feather name="arrow-up" color={selected=='X'?defaultScheme.defaultColor:'white'} size={15}/>
            {/* <Text style={getTextStyle('X')}>X</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={getContainerStyle('Y')} onPress={()=>{onclick('Y')}} >
        <Feather name="arrow-left" color={selected=='Y'?defaultScheme.defaultColor:'white'} size={15}/>
        <Feather name="arrow-right" color={selected=='Y'?defaultScheme.defaultColor:'white'} size={15}/>
            {/* <Text style={getTextStyle('Y')}>Y</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={getContainerStyle('Z')} onPress={()=>{onclick('Z')}} >
        <Feather name="rotate-ccw" color={selected=='Z'?defaultScheme.defaultColor:'white'} size={15}/>
        <Feather name="rotate-cw" color={selected=='Z'?defaultScheme.defaultColor:'white'} size={15}/>
            {/* <Text style={getTextStyle('Z')}>Z</Text> */}
        </TouchableOpacity>
    </BlurView>
  )
}

export default AxisControls