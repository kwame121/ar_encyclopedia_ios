import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,ImageBackground} from 'react-native';


const PortalSelectCard = ({data}) => {

const stylesheet = StyleSheet.create({
    containerStyle:{
    width:'100%',
    padding:0,
    paddingBottom:10,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    marginTop:10,
    // borderRadius:20,
    borderBottomColor:'#e6e6e6',
    borderBottomWidth:1
    },

    imageStyle:{
        width:80,
        height:80,
    },

    textWrapperStyle:{
        display:'flex',
        flexDirection:'column',
        marginLeft:10
    },
    topTextStyle:{
        fontSize:15,
        fontWeight:'500'
    },
    bottomTextStyle:{
        fontSize:13,
        color:'gray',
        marginTop:3,
        fontWeight:'400'
        
    },


})
  return (
    <View style={stylesheet.containerStyle}>
        <View style={{backgroundColor:'rgba(232, 232, 232, 0.66)',borderRadius:10}}>
            <ImageBackground source={data?.imgUrl} style={stylesheet.imageStyle} borderRadius={10}/>
        </View>
        <View style={stylesheet.textWrapperStyle}>
            <View><Text style={stylesheet.topTextStyle}>{data?.title}</Text></View>
            <View><Text style={stylesheet.bottomTextStyle}>{data?.location}</Text></View>
        </View>
    </View>
  )
}

export default PortalSelectCard;