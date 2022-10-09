import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ImageBackground, Platform} from 'react-native';
import ReadMore from 'react-native-read-more-text';

const ImageCard = ({data}) => {

    console.log(data);

  const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        paddingTop:0,
        display:'flex',
        flexDirection:'column',
        // borderWidth:1,
        marginBottom:10,
        borderRadius:20,
        backgroundColor:'#f1f1f1',
        marginTop:20,
        shadowOffset: Platform?.OS == 'ios'?{width: 1, height: 4}:'unset',
        shadowOpacity: Platform?.OS == 'ios'?0.2:'unset',
        shadowRadius: Platform?.OS == 'ios'?8:'unset',

        // borderColor:'#6b6b6b'
    },
    imageStyle:{
        width:'100%',
        height:200
    },
    textWrapper:{
        width:'100%',
    },
    textStyle:{
        textAlign:'justify',
        fontSize:16,
        lineHeight:25
    },
    imageTitleStyle : {
        fontWeight:'600',
        fontSize:18,
        padding:10
    }
  })  
  return (
    <View style={stylesheet.containerStyle}>
        {/* <View style={{width:'100%',marginBottom:0,padding:20,backgroundColor:'#2f2f2f'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'white'}}>{data?.title}</Text>
        </View> */}
        <View style={{width:'100%'}}>
            <ImageBackground source={data?.src} style={stylesheet.imageStyle} borderTopLeftRadius={20} borderTopRightRadius={20}/>
        </View>
        <View>
            <Text style={stylesheet.imageTitleStyle}>
                {data?.title}
            </Text>
        </View>
        <View style={{width:'100%',marginTop:10,padding:10}}>
        <ReadMore
              numberOfLines={3}
        >
                 <Text style={stylesheet.textStyle}>{data?.caption?.join('')}</Text>
        </ReadMore>
           
        </View>

    </View>
  )
}

export default ImageCard