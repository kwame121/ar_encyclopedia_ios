import React from 'react'
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity} from 'react-native';
import { defaultScheme } from '../../Utils/constants';




const SearchTabs = ({selected,text,onclick,value}) => {

    const stylesheet = StyleSheet.create({
      containerStyle:{
      padding:10,
      backgroundColor:selected?defaultScheme?.defaultColor:'white',
      width:'100%',
      textAlign:'center',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center'
    },  
      textStyle:{
        color:selected?'white':'black',
        fontWeight:'600'
      }
    })
  return (
    <TouchableOpacity style={{width:100}} onPress={()=>{onclick(value);}}>
      <View
      style={stylesheet.containerStyle}
      >
        <Text style={stylesheet.textStyle}>{text}</Text>
      </View>

    </TouchableOpacity>
    
  )
}

export default SearchTabs