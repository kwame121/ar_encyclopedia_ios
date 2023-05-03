import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView} from 'react-native';
import { returnDefault } from '../../Utils/functions';


const TextView = ({textArray}) => {

  

  const stylesheet = StyleSheet.create({
    container:{
      width:'100%',
      // padding:25, 
      paddingTop:0,
      marginTop:10,
      
      // flexDirection:'column',
      // flexGrow:1,
      
    },
    textStyle:{
      fontSize:16.5,
      textAlign:'left',
      lineHeight:28,
      letterSpacing:0.8
    }

  })
  const text = returnDefault(textArray?.join("\r\n\r\n"));
  return (
       <ScrollView style={stylesheet.container}>
        <Text style={stylesheet.textStyle}>{text}</Text>
      </ScrollView>
   
   
  )
}

export default TextView