import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, ImageBackground} from 'react-native';

const stylesheet = StyleSheet.create({
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        // backgroundColor:'#eaeaea',
        padding:10,
        marginBottom:10,
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea'
    },

    rightItem : {
        order:1,
        marginLeft:10,
        display:'flex',
        flexDirection:'column'
    },
    title: {
        fontWeight:'600'
    }
})

const TrackingBookCard = ({data}) => {
  return (
    <View style={stylesheet.container}>
        <View>
            <ImageBackground borderRadius={10} source={data?.imgUrl} style={{width:60,height:60,backgroundColor:'gray',borderRadius:10}}/>
        </View>
        
        <View style={stylesheet.rightItem}>
            <View>
                <Text style={stylesheet.title}>
                    {data?.title}
                </Text>
            </View>
            <View>
                <Text>
                    {data?.author}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default TrackingBookCard;