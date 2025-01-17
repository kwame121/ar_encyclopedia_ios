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
        
        marginLeft:10,
        display:'flex',
        flexDirection:'column'
    },
    title: {
        fontWeight:'500'
    }
})

const ResultItem = ({type,data}) => {
  return (
    <View style={stylesheet.container}>
        <View>
            <ImageBackground borderRadius={10} source={data?.imgUrl} style={{width:60,height:60,backgroundColor:'gray',borderRadius:10}}/>
        </View>
        {
            type == 'book' && 
            <View style={stylesheet.rightItem}>
                <View style={{marginBottom:4}}>
                    <Text style={stylesheet.title}>
                        {data?.title}
                    </Text>
                </View>
                <View>
                    <Text style={{color:'gray',fontWeight:'400'}}>
                        {data?.author}
                    </Text>
                </View>
            </View>
        }

        {
            type == 'module' && 
            <View style={stylesheet.rightItem}>
                <View style={{marginBottom:4}}>
                    <Text style={stylesheet.title}>
                        {data?.title}
                    </Text>
                </View>
                <View>
                    <Text style={{color:'gray',fontWeight:'400'}}>
                        {data?.bookTitle}
                    </Text>
                </View>
            </View>
        }
        

    </View>
  )
}

export default ResultItem