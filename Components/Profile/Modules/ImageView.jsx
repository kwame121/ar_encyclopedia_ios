import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView} from 'react-native';
import ImageCard from './ImageCard';


const ImageView = ({images}) => {

  console.log(images);

  const stylesheet = StyleSheet.create({
    containerStyle:{
      display:'flex',
      flexDirection:'column',
      paddingTop:20,
      width:'100%',
    }
  });

  
  return (
   <View>
    {
      images.map((image,key)=>{
        return (
          <ImageCard data = {image} key = {`${key}-${image?.title}`}/>
        )
      })
    }
    {/* <FlatList
        data={images}
        style={{width:'100%',paddingTop:20}}
        renderItem={({item,index})=>{
          console.log(item)
          return(
            <ImageCard data={item}/>
          )  
        }}
        /> */}
   </View>
  )
}

export default ImageView