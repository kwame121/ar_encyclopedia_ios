import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { BlurView } from '@react-native-community/blur';


const Hint = () => {
 
const styles = StyleSheet.create({
    containerStyle:{
        borderRadius:10,
        display:'flex',
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    imageContainerStyle:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'black'
    },
    hintText:{
        fontWeight:'400',
        color:'white',
        fontSize:14
    }
})
  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
     <View blurType={'dark'} blurAmount={20} style={styles.containerStyle}>
       
        <View style={{marginRight:10}}>
            <Text style={styles.hintText}>Tap To View Tracking Image</Text>
        </View>
        {/* <View style={styles.imageContainerStyle}>
            <Image borderRadius={50}>
            </Image>
        </View> */}
    </View>

    </View>
   
  )
}

export default Hint;