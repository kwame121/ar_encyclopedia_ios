import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,ImageBackground} from 'react-native';


const LessonCard = ({data}) => {

const stylesheet = StyleSheet.create({
    containerStyle:{
    width:'100%',
    padding:20,
    backgroundColor:'#eeeeee',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    marginTop:10,
    borderRadius:20
    },

    imageStyle:{
        width:60,
        height:60,
    },

    textWrapperStyle:{
        display:'flex',
        flexDirection:'column',
        marginLeft:10
    },
    topTextStyle:{
        fontSize:17,
        fontWeight:'600'
    },
    bottomTextStyle:{
        fontSize:14,
        
    },


})
  return (
    <View style={stylesheet.containerStyle}>
        <View>
            <ImageBackground source={data?.imgUrl} style={stylesheet.imageStyle} borderRadius={10}/>
        </View>
        <View style={stylesheet.textWrapperStyle}>
            <View><Text style={stylesheet.topTextStyle}>{data?.title}</Text></View>
            <View><Text style={stylesheet.bottomTextStyle}>{data?.bookTitle}</Text></View>
        </View>
    </View>
  )
}

export default LessonCard