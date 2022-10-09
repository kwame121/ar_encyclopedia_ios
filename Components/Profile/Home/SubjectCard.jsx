import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image} from 'react-native';



const SubjectCard = ({data}) => {

    const stylesheet = StyleSheet.create({
        container:{
            height:300,
            width:200,
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#3282B8',
            justifyContent:'space-between',
            alignItems:'center',
            marginRight:10,
            borderRadius:30
        },

        textStyle:{
            color:'white',
            fontSize:18,
            fontWeight:'500'
        }
       
    })
  return (
    <View style={stylesheet.container}>
        <View></View>
        <View>
            <Image source={data?.src} style={{width:110,height:110}}></Image>
        </View>
        <View style={{justifyContent:'center',marginTop:20,backgroundColor:'#256189',padding:10,width:'100%',borderRadius:20,borderTopLeftRadius:0,borderTopRightRadius:0,alignItems:'center',height:'25%'}}>
            <Text style={stylesheet.textStyle}>
                {data?.title}
            </Text>
        </View>
    </View>
  )
}

export default SubjectCard