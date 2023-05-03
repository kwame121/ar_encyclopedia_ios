import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image,ImageBackground} from 'react-native';
import { BlurView } from "@react-native-community/blur";



const SubjectCard = ({data,type,isFirst,isLast}) => {

    const stylesheet = StyleSheet.create({
        container:{
            height:400,
            width:300,
            display:'flex',
            flexDirection:'column',
            backgroundColor:data.background,
            justifyContent:'space-between',
            alignItems:'center',
            marginRight:0,
            borderRadius:30,
            position:'relative',
            marginLeft:isFirst?20:10,
            marginRight:isLast?10:0
        },

        textStyle:{
            color:'white',
            fontSize:18,
            fontWeight:'400',
            marginBottom:5
            
        },

        subStyle:{
            fontWeight:'300',
            fontSize:16,
            color:'#e8e8e8',
            textAlign:'center'
        }
       
    })
  return (
    <View style={stylesheet.container}>
        <View></View>
        <ImageBackground source={data?.backgroundImg} style={{width:'100%',height:'100%'}}
        borderRadius={15}></ImageBackground>
        <View
         style={{
            position:'absolute',
            bottom:0, 
            justifyContent:'center',
            marginTop:20,
            background:'transparent',
            overflow:'hidden',
            // padding:20,
            // backgroundColor:data.subColor,
        
            width:'100%',
            borderTopRightRadius:0,
            borderTopLeftRadius:0,
            borderRadius:10,
            alignItems:'center',
            height:'25%'}}>
                 <BlurView 
        blurType={type=='dark'?'dark':'light'}
        blurAmount={50}
        style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
        >
            <Text style={stylesheet.textStyle}>
                {data?.title}
            </Text>
            <Text style={stylesheet.subStyle}>
                {data?.subText}
            </Text>
        </BlurView>

        </View>
       
    </View>
  )
}

export default SubjectCard