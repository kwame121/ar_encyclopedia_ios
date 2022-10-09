import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert} from 'react-native';
import { colorScheme } from '../../../Utils/constants';


const Title = ({text,size,fontWeight,alignment}) => {
    const style = StyleSheet.create({
        nameText: {
            fontSize:size?size:35,
            fontWeight:fontWeight?fontWeight:'700',
            color:colorScheme?.light2,
            textAlign:alignment?alignment:'auto'
        },
        
        headerWrapper: 
        {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            textAlign:'center'
        },
    })
    
  return (
    <View style={style.headerWrapper}>
            <View style={{textAlign:'center',justifyContent:'center',alignContent:'center',width:'100%'}}>
                {/* <Text style={{fontSize:20,color:'gray'}}>Hello,</Text> */}
                <Text style={style.nameText}>{text}</Text>
            </View>
            <View style={{order:1,marginLeft:'auto',textAlign:'right'}}>
                {/* <Avatar/> */}
            </View>
        </View>
  )
}

export default Title