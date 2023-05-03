import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ZoomControls = ({onZoomIn,onZoomOut}) => {
 
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderRadius:20,
        width:120
    }
})
  return (
    <BlurView blurType={'dark'} style={styles.container}>
        <TouchableOpacity onPress={()=>{onZoomIn()}}>
            <Ionicons
            name="add"
            color="white"
            size={30}>
            </Ionicons>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onZoomOut()}}>
            <Ionicons
            name="remove"
            color="white"
            size={30}>
            </Ionicons>
        </TouchableOpacity>
    </BlurView>
  )
}

export default ZoomControls