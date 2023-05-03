import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image} from 'react-native';


const OptionCard = ({data}) => {

const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        padding:20,
        backgroundColor:'#3282B8',
        display:'flex',
        flexDirection:'row',
        height:200,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:20,
        marginTop:20,
        marginBottom:20
        // alignItems:'center'
    },
    optionTitle:{
        fontSize:18,
        fontWeight:'500',
        color:'white',
        marginBottom:10
    },
    optionDescription:{
        color:'white',
        fontSize:15,
        fontWeight:'400'
    }

})
  return (
    <View style={stylesheet.containerStyle}>
        <View style={{width:'80%'}}>
            <View>
            <Text style={stylesheet.optionTitle}>
                {data?.title}
            </Text> 
            </View>
            <View>
            <Text style={stylesheet.optionDescription}>
                {data?.description}
            </Text> 
            </View>
        </View>   
        <View>
            <Image source={data?.imgSrc} style={{width:80,height:80}}/>
        </View>
    </View>
  )
}

export default OptionCard