import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,ImageBackground} from 'react-native';


const FeaturedBook = ({data,isFirst,isLast}) => {

const stylesheet = StyleSheet.create({
    containerStyle:{
    width:180,
    padding:0,
    paddingBottom:10,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    marginBottom:20,
    marginTop:10,
    marginLeft:isFirst?15:10,
    marginRight:isLast?10:0,
    // borderRadius:20,
    },

    imageStyle:{
        width:180,
        height:180,
    },

    textWrapperStyle:{
        display:'flex',
        flexDirection:'column',
        // marginLeft:10,
        marginTop:10,
    },
    topTextStyle:{
        fontSize:17,
        fontWeight:'500'
    },
    bottomTextStyle:{
        fontSize:14,
        color:'gray',
        marginTop:3,
        fontWeight:'400'
        
    },


})
  return (
    <View style={stylesheet.containerStyle}>
        <View style={{backgroundColor:'rgba(232, 232, 232, 0.66)',borderRadius:20}}>
            <ImageBackground source={data?.imgUrl} style={stylesheet.imageStyle} borderRadius={10}/>
        </View>
        <View style={stylesheet.textWrapperStyle}>
            <View><Text style={stylesheet.topTextStyle}>{data?.title}</Text></View>
            <View><Text style={stylesheet.bottomTextStyle}>{data?.bookTitle}</Text></View>
        </View>
    </View>
  )
}

export default FeaturedBook