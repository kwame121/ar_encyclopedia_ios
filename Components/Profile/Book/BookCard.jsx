import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { colorScheme } from '../../../Utils/constants';


const stylesheet = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        padding:10
    }
})


const BookCard = ({data}) => {
  return (
    <View style={stylesheet.container}>
      <ImageBackground source={data?.imgUrl} borderRadius={10}  style={{width:'100%',height:210,backgroundColor:'gray',marginBottom:10,borderRadius:15}}/>
      <View>
        <Text style={{fontWeight:'600',color:colorScheme.light2}}>{data?.title}</Text>
        <Text  style={{color:colorScheme.light2}}>{data?.author}</Text>
      </View>
    </View>
  )
}

export default BookCard